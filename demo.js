var nodemailer= require('nodemailer');
var  transporter= nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"alamlibrary01@gmail.com",
        pass:"xdxiukkzcnxunmdg "
    }
});

var mailOption={
    from:"alamlibrary01@gmail.com",
    to:"alamlibrary01@gmail.com",
    subject:"Hello World",
    text:"Hello Haseeb"
}

transporter.sendMail(mailOption,function(error,info){
    if(error) throw error;
    else console.log("Email has been sent,",info.response);
})