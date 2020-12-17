import {ReactComponent as Beer} from './assets/beer.svg';
import c from './index.less';

const Welcome = () => (
    <div className={c.root}>
         <a href="/everything">See everything</a>
        <h1>
            <Beer className={c.greeting} />
            恭喜你跑起来了
        </h1>
        <p>能看到这个页面，至少你已经能够启动系统，后面还需要清理一些TODO~</p>
        <h2>检查项</h2>
        <ul>
            <li>确保<code>node</code>和<code>npm</code>都是最新版本。</li>
            <li>做一次<code>npm update</code>升级所有的依赖，建议再使用<code>npm outdated</code>检查下是否有可以升级的大版本。</li>
            <li>搜索各处的<code>TODO</code>并相应修改。</li>
            <li>将<code>git remote</code>修改为自己的库。</li>
            <li>将全部的Commit合并成一个（自行Google怎么做）。</li>
            <li>将代码提交到自己的产品代码库中。</li>
            <li>确保iPipe的流水线等都是正确的，能通过构建。</li>
        </ul>
        <p>最后，有了业务代码后，记得删除这个组件。</p>
    </div>
);

export default Welcome;
