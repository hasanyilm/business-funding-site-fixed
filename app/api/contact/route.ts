import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export const runtime='nodejs';
const transporter=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||587),secure:false,auth:{user:process.env.SMTP_USER as string,pass:process.env.SMTP_PASS as string},tls:{ciphers:'TLSv1.2'}});
export async function POST(req:Request){const data=await req.json();const html=`<h2>New Contact Message</h2><p><b>Name:</b> ${data.name||''}</p><p><b>Email:</b> ${data.email||''}</p><p><b>Message:</b><br/> ${data.message||''}</p>`;await transporter.sendMail({from:'Hasan at Business Funding Solutions <hasanyilmaz@live.co.uk>',replyTo:'hasanyilmaz@live.co.uk',to:'hasanyilmaz@live.co.uk',subject:'New Contact Message',html});return NextResponse.json({ok:true});}
