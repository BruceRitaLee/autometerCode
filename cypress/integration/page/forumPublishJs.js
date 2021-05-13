import forumPageJson from './forumPageJson'

export  default  class forumPublish{
    constructor(){
        this.url = forumPageJson.forumPublish.forumPublishUrl
    }
    visit(){
        cy.visit(this.url)
    }


    get cancelIframe(){
        return forumPageJson.forumPublish.cancelIframe
    }

    get dataType1(){
        return forumPageJson.forumPublish.dataType1
    }
    get dataType2(){
        return forumPageJson.forumPublish.dataType2
    }
    get dataType3(){
        return forumPageJson.forumPublish.dataType3
    }

    get titleTextFiled(){
        return forumPageJson.forumPublish.titleTextFiled
    }

    get editTextFiled(){
        return forumPageJson.forumPublish.editTextFiled
    }

    get publishButton(){
        return forumPageJson.forumPublish.publishButton
    }

    get calcelIfrmeFlag(){
        return forumPageJson.forumPublish.calcelIfrmeFlag
    }

    publishTopicFun(dataId,titleTest,editText){



        if(dataId===2){
            cy.get(this.dataType2).click()
        }
        if(dataId===3){
            cy.get(this.dataType3).click()
        }
        cy.get(this.titleTextFiled).type(titleTest)
        cy.get(this.editTextFiled).type(editText)
        cy.get(this.publishButton).click()
    }





}