var nodemailer= require('nodemailer');
var  transporter= nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"Enter Your Email",
        pass:"password of your authentication "
    }
});

var mailOption={
    from:"Enter Your Email",
    to:"Enter Your Email",
    subject:"Hello World",
    text:"Hello Haseeb"
}

transporter.sendMail(mailOption,function(error,info){
    if(error) throw error;
    else console.log("Email has been sent,",info.response);
})