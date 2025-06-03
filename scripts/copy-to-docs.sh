#!/bin/bash

# 将stories从组件文件夹复制到docs中
# Example:
# pnpm copy-to-docs all osui
# pnpm copy-to-docs all icloud
# pnpm copy-to-docs all # 默认是icloud

COMPONENT_NAME_ARG=$1
TARGET=${2:-icloud} # 默认
UI_FODER=./packages/ui/
EXCLUDE_FOLDER='/$|ui$|/docs$|\.\.$'

ICLOUD_COMPONENTS="affix alert anchor auto-complete avatar back-top badge brand-provider breadcrumb button calendar card carousel cascader checkbox col collapse config-provider date-picker descriptions divider drawer dropdown empty form gap grid image input input-number layout list mentions menu message modal notification pagination popconfirm popover progress radio rate result row select skeleton slider space spin statistic steps switch table tabs tag time-picker timeline tooltip transfer tree tree-select typography upload version joyride highlight-text quick-edit segmented"
OSUI_COMPONENTS="alert avatar back-top badge branch-dropdown button checkbox collapse date-picker directory-navigator drawer form input input-number markdown menu-dropdown message modal pagination popover progress radio search-select-list select space switch table tabs tag timeline toggle-button tooltip text-overflow-tooltip"
# 根据target给出是哪个component list，来选择复制组件到docs中去
COMPONENT_LIST=`[[ $TARGET == "icloud" ]] && echo "$ICLOUD_COMPONENTS" || echo "$OSUI_COMPONENTS"`

echo $COMPONENT_LIST

if [ $COMPONENT_NAME_ARG == 'all' ]
then
    find $UI_FODER -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | while IFS= read -r d; do
        COMPONENT_DIR=`echo $d | sed 's|//|/|g'` # mac的兼容，find时会保留最后的/，导致会有两个// 例如 ./packages/ui//tabs
        COMPONENT_NAME=`echo ${COMPONENT_DIR} | sed 's|./packages/ui/||'`

        echo "copy ${COMPONENT_NAME} stories from ${COMPONENT_DIR}"

        for var in $COMPONENT_LIST; do
            if [[ $COMPONENT_NAME =~ (^|[[:space:]])$var($|[[:space:]]) ]]
            then
                mkdir -p packages/ui/docs/stories/${COMPONENT_NAME}
                cp ${COMPONENT_DIR}/stories/${TARGET}.stories.tsx packages/ui/docs/stories/${COMPONENT_NAME}/index.stories.tsx
                cp ${COMPONENT_DIR}/stories/${TARGET}.stories.mdx packages/ui/docs/stories/${COMPONENT_NAME}/index.stories.mdx
                ## Ubuntu ships with GNU sed, where the suffix for the -i option is optional. OS X ships with BSD sed, where the suffix is mandatory. Try sed -i ''
                sed -i.bak "s|../src|@osui/${COMPONENT_NAME}|" packages/ui/docs/stories/${COMPONENT_NAME}/index.stories.tsx && rm -- "packages/ui/docs/stories/${COMPONENT_NAME}/index.stories.tsx.bak"
                # 复制demo目录
                if [[ -d "${COMPONENT_DIR}/stories/${TARGET}-demo" ]]
                then
                    echo "${COMPONENT_DIR}/stories/${TARGET}-demo"
                    rm -rf packages/ui/docs/stories/${COMPONENT_NAME}/${TARGET}-demo
                    cp -r ${COMPONENT_DIR}/stories/${TARGET}-demo packages/ui/docs/stories/${COMPONENT_NAME}/${TARGET}-demo
                    find packages/ui/docs/stories/${COMPONENT_NAME}/${TARGET}-demo/*.tsx -print0 |xargs -0 sed -i.bak "s|../../src|@osui/${COMPONENT_NAME}|"
                    find packages/ui/docs/stories/${COMPONENT_NAME}/${TARGET}-demo/*.bak -print0 |xargs -0 rm -f
                fi
            fi
        done
    done
else
    # 单个组件复制
    mkdir -p packages/ui/docs/stories/${COMPONENT_NAME_ARG}
    cp packages/ui/${COMPONENT_NAME_ARG}/stories/${TARGET}.stories.tsx packages/ui/docs/stories/${COMPONENT_NAME_ARG}/index.stories.tsx
    cp packages/ui/${COMPONENT_NAME_ARG}/stories/${TARGET}.stories.mdx packages/ui/docs/stories/${COMPONENT_NAME_ARG}/index.stories.mdx
    # 复制demo目录
    rm -rf packages/ui/${COMPONENT_NAME_ARG}/stories/${TARGET}-demo && cp -r packages/ui/${COMPONENT_NAME_ARG}/stories/${TARGET}-demo packages/ui/docs/stories/${COMPONENT_NAME}/${TARGET}-demo
    sed -i.bak "s|../src|@osui/${COMPONENT_NAME_ARG}|" packages/ui/docs/stories/${COMPONENT_NAME_ARG}/index.stories.tsx && rm -- "packages/ui/docs/stories/${COMPONENT_NAME_ARG}/index.stories.tsx.bak"
    # 替换../../src并清理bak文件
    find packages/ui/docs/stories/${COMPONENT_NAME_ARG}/${TARGET}-demo/*.tsx -print0 |xargs -0 sed -i.bak "s|../../src|@osui/${COMPONENT_NAME_ARG}|"
    find packages/ui/docs/stories/${COMPONENT_NAME_ARG}/${TARGET}-demo/*.bak -print0 |xargs -0 rm -f
fi


# 替换掉修改的mdx import from './index.tsx'
find packages/ui/docs/stories/ -type f -name "*.mdx" |xargs sed -i.bk "s|import \* as stories from \'\./${TARGET}\.stories';|import * as stories from './index.stories';|"
find packages/ui/docs/stories/ -type f -name "*.bk" |xargs rm
