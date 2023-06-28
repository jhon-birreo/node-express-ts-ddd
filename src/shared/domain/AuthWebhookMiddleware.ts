// import { FormatJSONResponse } from "./FormatJSONResponse"

// export const AuthWebhookMiddleware = () => {
//     const before = async (request: any) => {
//         if (!request.event.headers["authorization"] || request.event.headers["authorization"] !== `Bearer ${process.env.WEBHOOK_TOKEN}`) {
//             return FormatJSONResponse(401, { status: "Unauthorized" });
//         }
//     }

//     const after = async (request: any) => {
//         if (process.env.APP_ENVIRONMENT === 'local') {
//             // console.log(request);
//         }
//     }

//     return {
//         before,
//         after,
//     }
// }