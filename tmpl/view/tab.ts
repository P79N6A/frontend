/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./default.less';
import Magix from '../lib/magix.js';
import { List, ListMap } from '../data/list.js';
export default Magix.View.extend({
    tmpl: '@tab.html',
    init() {
        this.observeLocation('c');
        this.set({
            list: List
        });
    },
    assign() {
        return false;
    },
    render() {
        let { params } = Magix.Router.parse();
        let tab = params.c;
        if (!ListMap[tab]) {
            tab = List[0].key;
        }
        this.digest({
            active: tab
        });
    },
    '@{change.tab}<click>'(e) {
        Magix.Router.to('/nav/' + e.params.tab);
    }
});