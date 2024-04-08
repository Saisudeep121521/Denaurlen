const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const generateOTP = require("./generateOTP");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(email);

  const otp = generateOTP();

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "OTP Conformaton from Denaurlen",
    html : `
<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional //EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html
  xmlns='http://www.w3.org/1999/xhtml'
  xmlns:v='urn:schemas-microsoft-com:vml'
  xmlns:o='urn:schemas-microsoft-com:office:office'
>

  <head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='x-apple-disable-message-reformatting' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>

    <style type='text/css'>
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #0000ee;
        text-decoration: underline;
      }
      @media (max-width: 480px) {
        #u_content_heading_3 .v-container-padding-padding {
          padding: 40px 10px 0px !important;
        }
        #u_content_heading_3 .v-text-align {
          text-align: left !important;
        }
        #u_content_button_2 .v-size-width {
          width: 50% !important;
        }
        #u_content_text_2 .v-container-padding-padding {
          padding: 0px 10px 40px !important;
        }
        #u_content_text_2 .v-text-align {
          text-align: left !important;
        }
      }
    </style>

    <link
      href='https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap'
      rel='stylesheet'
      type='text/css'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap'
      rel='stylesheet'
      type='text/css'
    />
  </head>

  <body
    class='clean-body u_body container'
    style='
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ffffff;
      color: #000000;
    '
  >
<div class='container'>

<table
id='u_body'
style='
  border-collapse: collapse;
  table-layout: fixed;
  border-spacing: 0;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
  vertical-align: top;
  min-width: 320px;
  margin: 0 auto;
  background-color: #ffffff;
  width: 100%;
'
cellpadding='0'
cellspacing='0'
>
<tbody>
  <tr style='vertical-align: top'>
    <td
      style='
        word-break: break-word;
        border-collapse: collapse !important;
        vertical-align: top;
      '
    >
      <div
        class='u-row-container'
        style='padding: 0px; background-color: #eff4f2'
      >
        <div
          class='u-row'
          style='
            margin: 0 auto;
            min-width: 320px;
            max-width: 600px;
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-word;
            background-color: transparent;
          '
        >
          <div
            style='
              border-collapse: collapse;
              display: table;
              width: 100%;
              height: 100%;
              background-color: transparent;
            '
          >
            <div
              class='u-col u-col-100'
              style='
                max-width: 320px;
                min-width: 600px;
                display: table-cell;
                vertical-align: top;
              '
            >
              <div
                style='
                  background-color: #eff4f2;
                  height: 100%;
                  width: 100% !important;
                  border-radius: 0px;
                  -webkit-border-radius: 0px;
                  -moz-border-radius: 0px;
                '
              >
                <div
                  style='
                    box-sizing: border-box;
                    height: 100%;
                    padding: 0px;
                    border-top: 0px solid transparent;
                    border-left: 0px solid transparent;
                    border-right: 0px solid transparent;
                    border-bottom: 0px solid transparent;
                    border-radius: 0px;
                    -webkit-border-radius: 0px;
                    -moz-border-radius: 0px;
                  '
                >
                  <table
                    id='u_content_heading_3'
                    style='font-family: 'Open Sans', sans-serif'
                    role='presentation'
                    cellpadding='0'
                    cellspacing='0'
                    width='100%'
                    border='0'
                  >
                    <tbody>
                      <tr>
                        <td
                          class='v-container-padding-padding'
                          style='
                            overflow-wrap: break-word;
                            word-break: break-word;
                            padding: 30px 0px;
                            font-family: 'Open Sans', sans-serif;
                          '
                          align='left'
                        >
                          <h1
                            class='v-text-align'
                            style='
                              margin: 0px;
                              line-height: 100%;
                              text-align: center;
                              word-wrap: break-word;
                              font-family: Quicksand;
                              font-size: 30px;
                              font-weight: 700;
                              padding:40px 40px

                            '
                          >
                            <span
                              ><span style='line-height: 29px'
                                ><span style='line-height: 29px'
                                  ><span style='line-height: 29px'
                                    ><span style='line-height: 29px'
                                      ><span style='line-height: 29px'
                                        ><strong>DENAURLEN</strong></span
                                      ></span
                                    ></span
                                  ></span
                                ></span
                              ></span
                            >
                          </h1>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class='u-row-container'
        style='padding: 0px; background-color: transparent'
      >
        <div
          class='u-row'
          style='
            margin: 0 auto;
            min-width: 320px;
            max-width: 600px;
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-word;
            background-color: transparent;
          '
        >
          <div
            style='
              border-collapse: collapse;
              display: table;
              width: 100%;
              height: 100%;
              background-color: transparent;
            '
          >
            <div
              class='u-col u-col-100'
              style='
                max-width: 320px;
                min-width: 600px;
                display: table-cell;
                vertical-align: top;
              '
            >
              <div style='height: 100%; width: 100% !important'>
                <div
                  style='
                    box-sizing: border-box;
                    height: 100%;
                    padding: 0px;
                    border-top: 0px solid transparent;
                    border-left: 0px solid transparent;
                    border-right: 0px solid transparent;
                    border-bottom: 0px solid transparent;
                  '
                >
                  <table
                    id='u_content_button_2'
                    style='font-family: 'Open Sans', sans-serif'
                    role='presentation'
                    cellpadding='0'
                    cellspacing='0'
                    width='100%'
                    border='0'
                  >
                    <tbody>
                      <tr>
                        <td
                          class='v-container-padding-padding'
                          style='
                            overflow-wrap: break-word;
                            word-break: break-word;
                            padding: 10px;
                            font-family: 'Open Sans', sans-serif;
                          '
                          align='left'
                        >
                          <div class='v-text-align' align='center'>
                            <a
                              target='_blank'
                              class='v-button v-size-width'
                              style='
                                box-sizing: border-box;
                                display: inline-block;
                                text-decoration: none;
                                -webkit-text-size-adjust: none;
                                text-align: center;
                                color: #ffffff;
                                background-color: #0b6445;
                                border-radius: 4px;
                                -webkit-border-radius: 4px;
                                -moz-border-radius: 4px;
                                width: 30%;
                                max-width: 100%;
                                overflow-wrap: break-word;
                                word-break: break-word;
                                word-wrap: break-word;
                                mso-border-alt: none;
                                border-top-color: #ccc;
                                border-top-style: solid;
                                border-top-width: 0px;
                                border-left-color: #ccc;
                                border-left-style: solid;
                                border-left-width: 0px;
                                border-right-color: #ccc;
                                border-right-style: solid;
                                border-right-width: 0px;
                                border-bottom-color: #ccc;
                                border-bottom-style: solid;
                                border-bottom-width: 0px;
                                font-size: 14px;
                                cursor:none;
                                margin:20px 0px;
                              '
                            >
                              <span
                                style='
                                  display: block;
                                  padding: 10px 20px;
                                  line-height: 120%;
                                '
                                >OTP : 
                                ${otp}
                                </span
                              >
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>
  </body>
</html>
`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
      res.status(200).json({ otp });
    }
  });
});

module.exports = { sendEmail };
