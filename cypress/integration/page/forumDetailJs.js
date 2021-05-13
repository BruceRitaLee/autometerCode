import forumPageJson from './forumPageJson'

export default  class forumDetail{
    constructor(){
        this.url = forumPageJson.forumDetail.commonPostUrl
}

    visit(){
        cy.visit(this.url)
    }
    get commonPostUrl(){
        return forumPageJson.forumDetail.commonPostUrl
    }

    get askPostUrl(){
        return forumPageJson.forumDetail.askPostUrl
    }

    get playPostUrl(){
        return forumPageJson.forumDetail.playPostUrl
    }

    get videoPostUrl(){
        return forumPageJson.forumDetail.videoPostUrl
    }

    get miniPostUrl(){
        return forumPageJson.forumDetail.miniPostUrl
    }

    get forumDetailAssert(){
        return forumPageJson.forumDetail.forumDetailAssert
    }

    get publishTopicButton(){
        return forumPageJson.forumDetail.publishTopic
    }
    get loginPageAssert(){
        return forumPageJson.forumDetail.loginPageAssert
    }

    get replyButton(){
        return forumPageJson.forumDetail.replyButton
    }

    get nextPage(){
        return forumPageJson.forumDetail.nextPage
    }



    get replyText(){
        return forumPageJson.forumDetail.replyText
    }

    get replyPublishButton(){
        return forumPageJson.forumDetail.replyPublishButton
    }



    visitAndAssert(Url,assertElement,assertValue){
        cy.visit(Url)
        cy.get(assertElement).should('contain',assertValue)
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




    replyPostFunc(postText){
        cy.get(this.replyText).type(postText)
        cy.get(this.replyPublishButton).click({force:true})
    }

}
