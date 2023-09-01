
var projectName = '安居房地产销售系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '房源出租',
	url: './pages/fangyuanchuzu/list.html'
}, 
{
	name: '房源出售',
	url: './pages/fangyuanchushou/list.html'
}, 

]

var adminurl =  "http://localhost:8080/ssmc051q/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除"],"menu":"经纪人","menuJump":"列表","tableName":"jingjiren"}],"menu":"经纪人管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除"],"menu":"房源类型","menuJump":"列表","tableName":"fangyuanleixing"}],"menu":"房源类型管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除","查看评论","看房预约","租房"],"menu":"房源出租","menuJump":"列表","tableName":"fangyuanchuzu"}],"menu":"房源出租管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除","支付"],"menu":"租房信息","menuJump":"列表","tableName":"zufangxinxi"}],"menu":"租房信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"看房预约","menuJump":"列表","tableName":"kanfangyuyue"}],"menu":"看房预约管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"房屋类型","menuJump":"列表","tableName":"fangwuleixing"}],"menu":"房屋类型管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除","查看评论","购买","预约看房"],"menu":"房源出售","menuJump":"列表","tableName":"fangyuanchushou"}],"menu":"房源出售管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除","支付"],"menu":"房源购买","menuJump":"列表","tableName":"fangyuangoumai"}],"menu":"房源购买管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"出售看房","menuJump":"列表","tableName":"chushoukanfang"}],"menu":"出售看房管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","看房预约","租房"],"menu":"房源出租列表","menuJump":"列表","tableName":"fangyuanchuzu"}],"menu":"房源出租模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","购买","预约看房"],"menu":"房源出售列表","menuJump":"列表","tableName":"fangyuanchushou"}],"menu":"房源出售模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","删除","支付"],"menu":"租房信息","menuJump":"列表","tableName":"zufangxinxi"}],"menu":"租房信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","删除"],"menu":"看房预约","menuJump":"列表","tableName":"kanfangyuyue"}],"menu":"看房预约管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","删除","支付"],"menu":"房源购买","menuJump":"列表","tableName":"fangyuangoumai"}],"menu":"房源购买管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","删除"],"menu":"出售看房","menuJump":"列表","tableName":"chushoukanfang"}],"menu":"出售看房管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","看房预约","租房"],"menu":"房源出租列表","menuJump":"列表","tableName":"fangyuanchuzu"}],"menu":"房源出租模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","购买","预约看房"],"menu":"房源出售列表","menuJump":"列表","tableName":"fangyuanchushou"}],"menu":"房源出售模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除","查看评论"],"menu":"房源出租","menuJump":"列表","tableName":"fangyuanchuzu"}],"menu":"房源出租管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["修改"],"menu":"租房信息","menuJump":"列表","tableName":"zufangxinxi"}],"menu":"租房信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["修改"],"menu":"看房预约","menuJump":"列表","tableName":"kanfangyuyue"}],"menu":"看房预约管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除","查看评论"],"menu":"房源出售","menuJump":"列表","tableName":"fangyuanchushou"}],"menu":"房源出售管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["修改"],"menu":"房源购买","menuJump":"列表","tableName":"fangyuangoumai"}],"menu":"房源购买管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["修改"],"menu":"出售看房","menuJump":"列表","tableName":"chushoukanfang"}],"menu":"出售看房管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","看房预约","租房"],"menu":"房源出租列表","menuJump":"列表","tableName":"fangyuanchuzu"}],"menu":"房源出租模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","购买","预约看房"],"menu":"房源出售列表","menuJump":"列表","tableName":"fangyuanchushou"}],"menu":"房源出售模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"经纪人","tableName":"jingjiren"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
