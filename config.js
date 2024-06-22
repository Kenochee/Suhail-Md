const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Nakuru,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nakuru";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+254726044290" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254726044290";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_04_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsY0tubHhIRDUxZlYxRzNVc2xpeXZsd2kyeEZNUUlvV1R4Y2hBWGwrOUJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKYTQ1V3pvUFE3U2tveGZoVjMwd1VnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1NTIwMmQ3LThlY2YtNDY4NC1iNjRhLWY0MWViNWQzODRkNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAzLFxuICAgICAgMTM3LFxuICAgICAgMjQwLFxuICAgICAgMjU0LFxuICAgICAgNzgsXG4gICAgICAyMzksXG4gICAgICAyNTAsXG4gICAgICAxNzEsXG4gICAgICAyLFxuICAgICAgMTEzLFxuICAgICAgMzYsXG4gICAgICAyMCxcbiAgICAgIDE0NixcbiAgICAgIDEyNyxcbiAgICAgIDY0LFxuICAgICAgMTUsXG4gICAgICAxMTQsXG4gICAgICAxMzUsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgNTQsXG4gICAgICAxNzYsXG4gICAgICAxMzIsXG4gICAgICAyMDIsXG4gICAgICAxMDAsXG4gICAgICA1NCxcbiAgICAgIDE0NyxcbiAgICAgIDgzLFxuICAgICAgMjM5LFxuICAgICAgMTg3LFxuICAgICAgMTI3LFxuICAgICAgMTUsXG4gICAgICAxNTEsXG4gICAgICAxODksXG4gICAgICAxODIsXG4gICAgICAxNzgsXG4gICAgICAxNjcsXG4gICAgICAxODQsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5UzFTUlM4N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI2MDQ0MjkwOjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg1NDU5NDkwNDkwNTY6NjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWF1cEw4REVJL3YyYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvUjI2MjRyNkxpMTZLMWV5OUJIZS81YThCS1NGUEVkVCtBY0piS3hvRFFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNYa2k2YUtJL0hRQ09wdlNxcVNTbHBmR1V2Nm01OS84TTVDUklsUzV0YTl4TyswZWF5SXdNZnY1dXJvcVNocldyQzUwdW01d254TGphQ2tXRERVNEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9obWhud3ZZM0JnQlV6eGNuU0FzMVFGZThwTHEyTGZlWnZJM1RCZUs0U21pVTExSk1rdFdEc1Y3Q3pLanhxdEx5S3lyUk9YQkdvVG9nUUM2TVF5M0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNjA0NDI5MDo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTAzOTg5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpYVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlhULmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEszVXpTdVFFT0ZZVGllNXVTdkRjRXJtZWw1MjFjQUVlWnBIa2c3OG11ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzgwMjI3MTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "kenoche-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "kenoche",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
