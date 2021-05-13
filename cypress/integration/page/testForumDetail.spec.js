import forumDetail from "./forumDetailJs";
import funcUtil from "./funcUtil";
context('论坛详情页测试',()=>{
    let forum = new forumDetail();
    let func = new funcUtil()
    it('查看可以成功跳转到普通帖详情页',()=>{

        forum.visitAndAssert(forum.commonPostUrl,forum.forumDetailAssert,'发表于')

    })
    it('查看可以成功跳转到提问帖详情页',()=>{
        forum.visitAndAssert(forum.askPostUrl,forum.forumDetailAssert,'发表于')
    })
    it('查看可以成功跳转到活动贴详情页',()=>{
        forum.visitAndAssert(forum.playPostUrl,forum.forumDetailAssert,'发表于')
    })
    it('查看可以成功跳转到视频贴详情页',()=>{
        forum.visitAndAssert(forum.videoPostUrl,forum.forumDetailAssert,'发表于')
    })
    it('查看可以成功跳转到微帖贴详情页',()=>{
        forum.visitAndAssert(forum.miniPostUrl,forum.forumDetailAssert,'发表于')
    })

    it('点击发布新帖按钮，查看未登录用户跳转到登录页面',()=>{
        forum.visit()
        forum.clickAndAssert(null,1,forum.publishTopicButton,forum.loginPageAssert,'普通登录')
    })

    it('点击回复按钮，查看未登录的用户跳转到登录页面',()=>{
        forum.visit()
        forum.clickAndAssert(null,1,forum.replyButton,forum.loginPageAssert,'普通登录')
    })
    it('点击回复按钮，登录后可以成功回复帖子', function () {
        cy.visit('http://i.yiche.com/authenservice/login.aspx?ReturnUrl=http://baa.bitauto.com/a2402/thread-37389.html')
        func.login('15933678690','111111{enter}')
        cy.wait(1000)
        cy.get(forum.replyButton).click()
        forum.replyPostFunc("PC发布一个帖子，可否")



    });
})

