import axios from "axios";
import $ from "jquery";
import config from "../config.json";

export function getuserbyid(user_id) {
  return axios.post(config.ApiUrl+'users/GetUserById',{user_id:user_id});
};

export function edituserprofile(user_id,username,useremail,fullName,gender,DOB,religion,status,wanna_find,child,address,pictures,CameraImg) {
       console.log(pictures,'0000')
       var formData = new FormData();    //formdata object
		formData.append('user_id', user_id);   //append the values with key, value pair
		formData.append('username', username);
		formData.append('useremail', useremail);
		formData.append('fullName', fullName);
		formData.append('gender', gender);
		formData.append('DOB', DOB);
		formData.append('religion', religion);
		formData.append('status', status);
		formData.append('wanna_find', wanna_find);
		formData.append('child', child);
		formData.append('address', address);
	    formData.append('pictures', pictures);
		
	

       return axios.post(config.ApiUrl+'users/edit_user_profile',formData);
};


export function verfyMoNo(otp,user_id) {
  return axios.post(config.ApiUrl+'users/mobile',{otp:otp,user_id:user_id});
};

export function verfyotp(otp,user_id) {
  return axios.post(config.ApiUrl+'users/verifyotp',{otp:otp,user_id:user_id});
};

export function criteria(user_id,Until,Years,Minimaleducation,tribe,skin_Color,height,Width,Daily,Lifestyle,
	minimumincome,criteriacouple,physical,Eyeglasses,Veli,Smoke,Alcohol,Tattoo,Piercing,hobby) {
  return axios.post(config.ApiUrl+'user/Criteria',{
  		user_id:user_id,
	  	Until:Until,
	  	Years:Years,
	  	Minimaleducation:Minimaleducation,
	  	tribe:tribe,
	  	skin_Color:skin_Color,
	  	height:height,
	  	Width:Width,
	  	Daily:Daily,
	  	Lifestyle:Lifestyle,
	  	minimumincome:minimumincome,
	  	criteriacouple:criteriacouple,
	  	physical:physical,
	  	Eyeglasses:Eyeglasses,
	  	Veli:Veli,
	  	Smoke:Smoke,
	  	Alcohol:Alcohol,
	  	Tattoo:Tattoo,
	  	Piercing:Piercing,
	  	hobby:hobby,
  });
};

export function usereducationdetails(user_id,Lasteducation,Departement) {
  return axios.post(config.ApiUrl+'User/education',{
  		user_id:user_id,
	  	Lasteducation:Lasteducation,
	  	Departement:Departement,
	  
	  
  });
};

export function userworkdetails(user_id,Work,income) {
  return axios.post(config.ApiUrl+'User/Work',{
  		user_id:user_id,
	  	Work:Work,
	  	income:income,
	  
	  
  });
};

export function userDomiciles(user_id,currentcity,Homestatus,Hometown) {
  return axios.post(config.ApiUrl+'User/Domiciles',{
  		user_id:user_id,
	  	currentcity:currentcity,
	  	Homestatus:Homestatus,
	  	Hometown:Hometown,
	  
	  
  });
};

export function basicInfo(user_id,status,religion,interestedIn,nickName,fullName,email,phone,DOB) {
  return axios.post(config.ApiUrl+'user/editBasicInfo',{
  		user_id:user_id,
	  	status:status,
	  	religion:religion,
	  	interestedIn:interestedIn,
	  	nickName:nickName,
	  	fullName:fullName,
	  	email:email,
	  	phone:phone,
	  	DOB:DOB,
	  
	  
  });
};

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}