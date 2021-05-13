import forumListJs from "./forumListJs";
context('论坛列表页测试',()=>{
    let forum = new forumListJs()
    it('点击切换论坛的按钮，弹窗找论坛的页面', function () {
        forum.visit()
        forum.clickAndAssert(null,0,forum.forumSwitch,forum.SwitchTab,'找社区')
    });
    //跳转的网页链接非visit的域名时会有报错，
    // 如果需要看链接是否正常可以在cypress.json中设置："chromeWebSecurity": false
    it('点击论坛列表页的发布按钮，查看未登录的用户跳转到登录页面',()=>{
        forum.visit()
        forum.clickAndAssert(null,1,forum.publishTopic,forum.loginPageAssert,'普通登录')
    })
    it('点击提问帖tab下的帖子，查看可以成功跳转到帖子详情页',()=>{
        forum.visit()
        cy.get(forum.askTab).click()
        forum.clickAndAssert(null,1,forum.askTopic,forum.topicDetail,"返回列表")
    })
    //我就想试试这个注解是怎么回事
    it('滑动到底部点击next，查看跳转到第二页',()=>{
        forum.visit()
        forum.clickAndAssert(2000,0,forum.nextFlag,forum.secondPage,'2')
    })


})