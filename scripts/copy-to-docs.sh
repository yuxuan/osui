#!/bin/bash

# 将stories从组件文件夹复制到docs中
# Example:
# yarn copy-to-docs all osui
# yarn copy-to-docs all icloud
# yarn copy-to-docs all # 默认是osui

COMPONENT_NAME_ARG=$1
TARGET=${2:-osui} # 默认值
UI_FODER=./packages/ui/
EXCLUDE_FOLDER='/$|ui$|/docs$|\.\.$'
echo $TARGET

ICLOUD_COMPONENTS="alert auto-complete avatar back-top badge breadcrumb button cascader checkbox col collapse date-picker drawer dropdown empty form input input-number list menu message modal multi-menu pagination popover progress radio row select space spin steps switch table tabs tag time-picker timeline tooltip tree tree-select"
OSUI_COMPONENTS="alert avatar back-top badge branch-dropdown button checkbox collapse date-picker directory-navigator drawer form input input-number markdown menu-dropdown message modal pagination popover progress radio search-select-list select space switch table tabs tag timeline toggle-button tooltip"
# 根据target给出是哪个component list，来选择复制组件到docs中去
COMPONENT_LIST=`[[ $TARGET == "icloud" ]] && echo "$ICLOUD_COMPONENTS" || echo "$OSUI_COMPONENTS"`

echo $COMPONENT_LIST

if [ $COMPONENT_NAME_ARG == 'all' ]
then
    find $UI_FODER -maxdepth 1 -type d | grep -v -E $EXCLUDE_FOLDER | while IFS= read -r d; do
        COMPONENT_DIR=`echo $d | sed 's|//|/|g'` # mac的兼容，find时会保留最后的/，导致会有两个// 例如 ./packages/ui//tabs
        echo $COMPONENT_DIR

        COMPONENT_NAME=`echo ${COMPONENT_DIR} | sed 's|./packages/ui/||'`
        echo "copy ${COMPONENT_NAME} stories"

        for var in $COMPONENT_LIST; do
            if [[ $COMPONENT_NAME =~ (^|[[:space:]])$var($|[[:space:]]) ]]
            then
                mkdir -p packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME}
                cp ${COMPONENT_DIR}/stories/${TARGET}.stories.tsx packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME}/index.stories.tsx
                cp ${COMPONENT_DIR}/stories/${TARGET}.stories.mdx packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME}/index.stories.mdx
                ## Ubuntu ships with GNU sed, where the suffix for the -i option is optional. OS X ships with BSD sed, where the suffix is mandatory. Try sed -i ''
                sed -i.bak "s|../src|@osui/${COMPONENT_NAME}|" packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME}/index.stories.tsx && rm -- "packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME}/index.stories.tsx.bak"
            fi
        done
    done
else
    # 单个组件复制
    mkdir -p packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME_ARG}
    cp packages/ui/${COMPONENT_NAME_ARG}/stories/${TARGET}.stories.tsx packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME_ARG}/index.stories.tsx
    cp packages/ui/${COMPONENT_NAME_ARG}/stories/${TARGET}.stories.mdx packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME_ARG}/index.stories.mdx
    sed -i.bak "s|../src|@osui/${COMPONENT_NAME_ARG}|" packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME_ARG}/index.stories.tsx && rm -- "packages/ui/docs/${TARGET}/stories/${COMPONENT_NAME_ARG}/index.stories.tsx.bak"
fi
