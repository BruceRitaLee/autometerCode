import forumFirstPageJson from './forumPageJson'

export  default  class forumList{
    constructor(){
        this.url = forumFirstPageJson.forumList.forumListUrl
    }

    visit(){
        cy.visit(this.url)
    }
    get forumSwitch(){
        return forumFirstPageJson.forumList.forumSwitch
    }
    get SwitchTab(){
        return forumFirstPageJson.forumList.SwitchTab
    }

    get publishTopic(){
        return forumFirstPageJson.forumList.publishTopic
    }

    get loginPageAssert(){
        return forumFirstPageJson.forumList.loginPageAssert
    }

    get askTab(){
        return forumFirstPageJson.forumList.askTab
    }

    get askTopic(){
        return forumFirstPageJson.forumList.askTopic
    }

    get topicDetail(){
        return forumFirstPageJson.forumList.forumDetailAssert
    }

    get nextFlag(){
        return forumFirstPageJson.forumList.nextPage
    }

    get secondPage(){
        return forumFirstPageJson.forumList.secondPageAssert
    }
    clickAndAssert(scrollNum,isNeedSkip,clickElement,assertElement,assertValue){
        if(scrollNum!==null){
            cy.scrollTo(0,scrollNum)
        }
        if(isNeedSkip){
            cy.get(clickElement).invoke('attr','target','')
        }
        cy.get(clickElement).click()
        if(assertElement!==null) {
            cy.get(assertElement).should('contain',assertValue)
        }
    }






}