import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplate.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log("Email sent successfully: ", response);
    } catch (error) {
        console.error("Error sending verification", error);
        throw new Error(`Failed to send email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "9afb6416-e1c7-427b-8c68-867e4a826e88",
            template_variables: {
                company_info_name: "Thinkster",
                name: name,
            }
        });
        console.log("Welcome Email sent successfully: ", response);
    } catch (error) {
        console.log("Error sending welcome email: ", error);
        throw new Error(`Failed to send email: ${error}`);
    }

};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        });
    } catch (error) {
        console.log("Error sending password reset email: ", error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        });
        console.log("Password Reset Email sent successfully: ", response);
    } catch (error) {
        console.error("Error sending password reset email: ", error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}