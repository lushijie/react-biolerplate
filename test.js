/* 
* @Author: lushijie
* @Date:   2016-06-13 15:23:42
* @Last Modified by:   lushijie
* @Last Modified time: 2016-06-13 15:59:01
*/
function Student(name, sex){
	this.name = name;
	this.sex = sex;
}
Student.prototype.getName = function(){
	console.log(this.name);
}

function subStudent(name, sex, grade){
	Student.call(this, name, sex);
	this.grade = grade;
}
subStudent.prototype = new Student();
subStudent.prototype.constructor = subStudent;
subStudent.prototype.getGrade = function(){
	return this.grade;
}



function capTicker(lastTime){
	$.cookie('captimer', lastTime, { expires: 365 });
    setTimeout(function(){
        var lastTime = parseInt($.cookie('captimer'))-1;
        if(lastTime >0 ){
            $.cookie('captimer', lastTime, { expires: 365 });
            $('.captcha').html(lastTime+'秒后重新获取验证码');
            capTicker(lastTime);
        }else{
            $('.captcha').html('获取验证码');
            $('.captcha').removeClass('btn-disabled');
        }
    },1000)
}

var a = [1,1,3,4,6,8,3,2];
for(var i = 0; i < a.length; i++){

}


$('a').click(function(evt){
	alert($(evt.target).parent().prop('tagName'))
})


function getParentDivNum(selector){
	//传入元素选择器
	return $(selector).parents('body').find('div').length - $(selector).find('div').length;
}