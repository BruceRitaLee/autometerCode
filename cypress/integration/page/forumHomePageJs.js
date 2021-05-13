import forumPageJson from './forumPageJson'
export  default  class forumFirstPage{
    constructor(){
        this.url = forumPageJson.forumHomePage.forumHomePageUrl
    }
    //获取论坛首页三种类型论坛的tab
    get carTab(){
        return forumPageJson.forumHomePage.carTabList
    }
    get areaTab(){
        return forumPageJson.forumHomePage.areaTabList
    }
    get themeTab(){
        return forumPageJson.forumHomePage.themeTabList
    }
    //进入首页
    visit(){
        cy.visit(this.url)
    }
    //分别获取三种类型论坛下的某一具体论坛
    get carForumList(){
        return forumPageJson.forumHomePage.carForum
    }
    get areaForumList(){
        return  forumPageJson.forumHomePage.areaFroum
    }
    get themeForumList(){
        return forumPageJson.forumHomePage.themeFroum
    }
    //进入三种具体论坛后进行的断言
    get areaForumAssert(){
        return forumPageJson.forumHomePage.areaForumAssert
    }
    get carForumAssert(){
        return forumPageJson.forumHomePage.carForumAssert
    }
    get themeForumAssert(){
        return forumPageJson.forumHomePage.themeForumAssert
    }

    get lastView(){
        return cy.get(forumPageJson.forumHomePage.lateView)
    }

    get moreDaily(){
        return forumPageJson.forumHomePage.moreLink
    }

    get moreDailyAssert(){
        return forumPageJson.forumHomePage.jingxuan
    }

    get DailyPost(){
        return cy.get(forumPageJson.forumHomePage.Dailypost)
    }

    get DailyPostclick(){
        return cy.get(forumPageJson.forumHomePage.Dailypostclick)
    }

    get forumDetail(){
        return forumPageJson.forumHomePage.forumDetail
    }

    get editotRecommendPost(){
        return forumPageJson.forumHomePage.editorRecommendPost
    }

    get moreActivity(){
        return forumPageJson.forumHomePage.moreActivity
    }

    get activityAssert(){
        return forumPageJson.forumHomePage.activityAssert
    }

    formFirstToForum(ForumTab,forumName,assertForum){
        cy.get(ForumTab).click()
        cy.get(forumName).invoke('attr','target','')
        cy.get(forumName).click()
        cy.url().should('contain',assertForum)
    }

    scrollToClick(scrollNum,clickAtt,assertAtt){
        if(scrollNum!==null) {
            cy.scrollTo(0, scrollNum)
        }
        if(clickAtt!==null) {
            cy.get(clickAtt).invoke('attr', 'target', '')
            cy.get(clickAtt).click()
        }
        if(assertAtt!==null) {
            cy.url().should('contain', assertAtt)
        }
    }



}
