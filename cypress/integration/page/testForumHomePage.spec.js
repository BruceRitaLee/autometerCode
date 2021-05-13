import forumHomePage from "./forumHomePageJs";
context('论坛首页测试',()=>{
        let forum = new forumHomePage()
    it('查看可以成功点击车型论坛进入到车型论坛列表页',()=>{
        forum.visit()
        forum.formFirstToForum(forum.carTab,forum.carForumList,forum.carForumAssert)
    })

    it('查看可以成功点击地区论坛进入到地区论坛列表页',()=>{
        forum.visit()
        forum.formFirstToForum(forum.areaTab,forum.areaForumList,forum.areaForumAssert)
    })

    it('查看可以成功点击主题论坛进入到主题论坛列表页', function () {
        forum.visit()
        forum.formFirstToForum(forum.themeTab,forum.themeForumList,forum.themeForumAssert)
    });

    it('进入一个社区，刷新页面后查看最新浏览增加该论坛', function () {
        forum.visit()
        forum.scrollToClick(null,forum.carForumList,'')
        forum.visit()
        cy.scrollTo(0,500)
        forum.lastView.should('have.attr','href',forum.carForumAssert)
    });
    it('查看点击更多精选日报，可以跳转到精选日报聚合页',()=>{
        forum.visit()
        forum.scrollToClick(500,forum.moreDaily,forum.moreDailyAssert)
    })
    it('查看点击精选日报的第一个帖子，进入到帖子详情页',()=>{
        forum.visit()
        cy.scrollTo(0,500)
        forum.DailyPost.invoke("attr",'target','')
        forum.DailyPostclick.click()
        cy.url().should('contain',forum.forumDetail)

    })
    it('点击编辑推荐帖子，查看可以成功跳转到帖子详情页', function () {
        forum.visit()
       forum.scrollToClick(800,forum.editotRecommendPost,forum.forumDetail)
    });

    it('点击论坛首页活动列表的更多按钮，跳转到活动聚合页',()=>{
        forum.visit()
        forum.scrollToClick(800,forum.moreActivity,forum.activityAssert)

    })


})