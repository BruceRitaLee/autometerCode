import forumPublishJs from "./forumPublishJs";
import funcUtil from "./funcUtil";

context('这个是发布页的测试',()=>{
    let publish = new forumPublishJs()
    let func = new funcUtil
    it.only('查看可以成功发布普通帖',()=>{
        publish.visit()
        func.login('15933678690','111111{enter}')
        cy.wait(1000)
        publish.publishTopicFun(1,'这个是PC自动化发布的一个普通帖','\n' +
            '心在山东身在吴，飘蓬江海谩嗟吁。 他时若遂凌云志，敢笑黄巢不丈夫')

    })
    it('查看可以成功发布提问帖',()=>{
        publish.visit()
        func.login('15933678690','111111{enter}')
        cy.wait(1000)
        publish.publishTopicFun(2,'这个是PC自动化发布的一个提问帖','\n' +
            '心在山东身在吴，飘蓬江海谩嗟吁。 他时若遂凌云志，敢笑黄巢不丈夫')

    })
})