import React from 'react'
import { Box, Container, Typography } from "@mui/material";


function privacyAndPolicy() {

    const p_style = {
        color: "#0D0E10",
        fontSize: {sm:"15px", md:"16px"},
        fontStyle: "normal",
        lineHeight: {sm:"29px", md:"35px"},
        fontWeight: {sm:"350px", md:"400"},
        textAlign: "justify",
        marginTop:"16px"
      };

  return (
    <>
        <Container sx={{minWidth:"85%", width:{xs:"", sm:"85%", md:""}, paddingBottom:"200px"}}>

      <Box>
        <Typography
          sx={{
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: {sm:"72px", md:"110px"},
            color: "#0D0E10",
            marginTop:{xs:"100px", sm:"70px", md:"70px"},

          }}
        >
          Privacy and policy
        </Typography>

        
          <Typography variant='h6' sx={{marginTop:"30px"}}>WHAT DO WE DO WITH YOUR INFORMATION?</Typography>
          <Typography sx={p_style}>
          When you subscribe to a programme from our Website, we collect the personal information you give us such as your name, address and email address.
When you browse our Website, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
Email marketing (if applicable): With your permission, we may send you emails about our, new offerings and other updates.

          </Typography>
          <Typography variant='h6' sx={{marginTop: "52px",
}}>CONSENT</Typography>
          <Typography sx={p_style}>
          How do you get my consent?
When you provide us with personal information to complete a transaction, verify your credit card, place an order, we imply that you consent to our collecting it and using it for that specific reason only.
If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
How do I withdraw my consent?
If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at ____or mailing us ____ . 
          </Typography>
          <Typography variant='h6' sx={{marginTop: "52px",
}}>DISCLOSURE</Typography>

          <Typography sx={p_style}>
          We may disclose your personal information if we are required by law to do so or if you violate our Terms of Use.

SECTION 4 – PAYMENT
We use __ for processing payments. We___ do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com
          </Typography>
          <Typography variant='h6' sx={{marginTop: "52px",
}}>THIRD-PARTY SERVICES</Typography>

          <Typography sx={p_style}>
          In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.
For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
Once you leave our Website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Use.
Links
When you click on links on our Website, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.

          </Typography>
       
          <Typography variant='h6' sx={{marginTop: "52px",
}}>SECURITY</Typography>
          <Typography sx={p_style}>
          To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
          </Typography>
          <Typography variant='h6' sx={{marginTop: "52px",
}}>COOKIES</Typography>

          <Typography sx={p_style}>
          We use cookies to maintain session of your user. It is not used to personally identify you on other websites.

          </Typography>
          <Typography variant='h6' sx={{marginTop: "52px",
}}>AGE OF CONSENT</Typography>

          <Typography sx={p_style}>
          By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
          </Typography>
          <Typography variant='h6' sx={{marginTop: "52px",
}}>CHANGES TO THIS PRIVACY POLICY</Typography>

          <Typography sx={p_style}>
          We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
          </Typography>
        
          <Typography varient="h6" sx={{marginTop: "31px",
}}>QUESTIONS AND CONTACT INFORMATION
</Typography>
          <Typography sx={p_style}>
          If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at hello@kalibre.ai     </Typography>
         
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginBottom:"60px",
          }}
        >
          <Typography variant='h6'>ADDRESS</Typography>
          <Typography sx={{}}>
          DWise TechLabs Pvt Ltd,<br/>

          
          No 247, Swasmi Arcade,<br/>

          
          JCK Industrial Park, <br/>

          
          Hebbal Industrial Area,<br/>

         
          Mysore - 570016
          </Typography>
      </Box>
      </Container>

    </>
  )
}

// privacyAndPolicy.hideNavbar = true;
privacyAndPolicy.hideFooter = true;

export default privacyAndPolicy