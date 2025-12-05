import { Submission } from './types';

export const USER_PROFILE = {
  name: "Moon Seoyeon",
  nickname: "AI16_문서연",
  email: "aboutexo04@gmail.com",
  avatar: "https://aistages-api-public-prod.s3.amazonaws.com/app/Users/00004579/user_image.png",
  role: "AI Researcher / Data Scientist",
  bio: "Passionate about Machine Learning and Data Analysis. Focused on ensemble methods and hyperparameter tuning."
};

export const COMPETITION_INFO = {
  title: "House Price Prediction | 아파트 실거래가 예측",
  description: "Predicting apartment transaction prices based on real transaction data in Seoul.",
  tags: ["#PrivateCompetition", "#AIBootcamp16", "#MLAdvanced"],
  period: "2025.09.01 ~ 2025.09.11",
  metric: "RMSE"
};

// Extracted all successful submissions for user ID 4579
export const SUBMISSION_HISTORY: Submission[] = [
  {
    id: 120539,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112974,
      public_result: { RMSE: { value: "15761.4969", rank: true, decs: false } },
      private_result: { RMSE: { value: "14965.2771", rank: true, decs: false } },
      created_at: "2025-09-11T11:59:39.243533+09:00",
      updated_at: "2025-09-11T11:59:39.243556+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-11T11:59:37.647103+09:00",
    updated_at: "2025-09-11T11:59:39.207743+09:00"
  },
  {
    id: 120473,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112909,
      public_result: { RMSE: { value: "27316.7617", rank: true, decs: false } },
      private_result: { RMSE: { value: "21423.7250", rank: true, decs: false } },
      created_at: "2025-09-10T23:25:56.169057+09:00",
      updated_at: "2025-09-10T23:25:56.169084+09:00"
    },
    description: "XGBoost, LightGBM Ensemble",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-10T23:25:53.637435+09:00",
    updated_at: "2025-09-10T23:25:56.115021+09:00"
  },
  {
    id: 120377,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112822,
      public_result: { RMSE: { value: "15790.9348", rank: true, decs: false } },
      private_result: { RMSE: { value: "14699.4904", rank: true, decs: false } },
      created_at: "2025-09-10T03:04:01.508228+09:00",
      updated_at: "2025-09-10T03:04:01.508255+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-10T03:03:57.120540+09:00",
    updated_at: "2025-09-10T03:04:01.455758+09:00"
  },
  {
    id: 120376,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112821,
      public_result: { RMSE: { value: "15794.7001", rank: true, decs: false } },
      private_result: { RMSE: { value: "15038.0940", rank: true, decs: false } },
      created_at: "2025-09-10T02:39:15.995101+09:00",
      updated_at: "2025-09-10T02:39:15.995129+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-10T02:39:12.049542+09:00",
    updated_at: "2025-09-10T02:39:15.957244+09:00"
  },
  {
    id: 120372,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112817,
      public_result: { RMSE: { value: "15706.5197", rank: true, decs: false } },
      private_result: { RMSE: { value: "14426.9141", rank: true, decs: false } },
      created_at: "2025-09-10T02:01:25.999083+09:00",
      updated_at: "2025-09-10T02:01:25.999112+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-10T02:01:22.077544+09:00",
    updated_at: "2025-09-10T02:01:25.948426+09:00"
  },
  {
    id: 120161,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112621,
      public_result: { RMSE: { value: "15899.3964", rank: true, decs: false } },
      private_result: { RMSE: { value: "14635.7966", rank: true, decs: false } },
      created_at: "2025-09-08T09:13:15.106531+09:00",
      updated_at: "2025-09-08T09:13:15.106561+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-08T09:13:10.959074+09:00",
    updated_at: "2025-09-08T09:13:15.047389+09:00"
  },
  {
    id: 120226,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112678,
      public_result: { RMSE: { value: "25860.1076", rank: true, decs: false } },
      private_result: { RMSE: { value: "22998.0005", rank: true, decs: false } },
      created_at: "2025-09-08T20:31:37.392204+09:00",
      updated_at: "2025-09-08T20:31:37.392232+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-08T20:31:33.484022+09:00",
    updated_at: "2025-09-08T20:31:37.350774+09:00"
  },
  {
    id: 120105,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112569,
      public_result: { RMSE: { value: "15997.4557", rank: true, decs: false } },
      private_result: { RMSE: { value: "14821.0361", rank: true, decs: false } },
      created_at: "2025-09-07T22:11:05.322396+09:00",
      updated_at: "2025-09-07T22:11:05.322425+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-07T22:11:01.423804+09:00",
    updated_at: "2025-09-07T22:11:05.287072+09:00"
  },
  {
    id: 120100,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112564,
      public_result: { RMSE: { value: "15219.4497", rank: true, decs: false } },
      private_result: { RMSE: { value: "15381.2981", rank: true, decs: false } },
      created_at: "2025-09-07T21:27:34.720739+09:00",
      updated_at: "2025-09-07T21:27:34.720770+09:00"
    },
    description: "LightGBM - Final Selection",
    log: "",
    phase: "Finished",
    final: true,
    created_at: "2025-09-07T21:27:30.781380+09:00",
    updated_at: "2025-09-11T18:53:11.118084+09:00"
  },
  {
    id: 120095,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112559,
      public_result: { RMSE: { value: "16872.7442", rank: true, decs: false } },
      private_result: { RMSE: { value: "15414.7499", rank: true, decs: false } },
      created_at: "2025-09-07T20:43:04.776565+09:00",
      updated_at: "2025-09-07T20:43:04.776593+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-07T20:43:01.143564+09:00",
    updated_at: "2025-09-07T20:43:04.729927+09:00"
  },
  {
    id: 120069,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112535,
      public_result: { RMSE: { value: "16056.9743", rank: true, decs: false } },
      private_result: { RMSE: { value: "15211.3461", rank: true, decs: false } },
      created_at: "2025-09-07T12:57:35.489194+09:00",
      updated_at: "2025-09-07T12:57:35.489223+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-07T12:57:31.639280+09:00",
    updated_at: "2025-09-07T12:57:35.448686+09:00"
  },
  {
    id: 120039,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112505,
      public_result: { RMSE: { value: "16841.4091", rank: true, decs: false } },
      private_result: { RMSE: { value: "14330.2513", rank: true, decs: false } },
      created_at: "2025-09-06T17:06:17.610453+09:00",
      updated_at: "2025-09-06T17:06:17.610482+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-06T17:06:15.888756+09:00",
    updated_at: "2025-09-06T17:06:17.563571+09:00"
  },
  {
    id: 120038,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112504,
      public_result: { RMSE: { value: "17012.8380", rank: true, decs: false } },
      private_result: { RMSE: { value: "14200.4391", rank: true, decs: false } },
      created_at: "2025-09-06T17:03:29.031106+09:00",
      updated_at: "2025-09-06T17:03:29.031136+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-06T17:03:24.952100+09:00",
    updated_at: "2025-09-06T17:03:28.986226+09:00"
  },
  {
    id: 120037,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112503,
      public_result: { RMSE: { value: "16161.1275", rank: true, decs: false } },
      private_result: { RMSE: { value: "14258.5735", rank: true, decs: false } },
      created_at: "2025-09-06T16:43:34.435494+09:00",
      updated_at: "2025-09-06T16:43:34.435521+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-06T16:43:32.412798+09:00",
    updated_at: "2025-09-06T16:43:34.391846+09:00"
  },
  {
    id: 120022,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112490,
      public_result: { RMSE: { value: "17281.3922", rank: true, decs: false } },
      private_result: { RMSE: { value: "14130.4687", rank: true, decs: false } },
      created_at: "2025-09-06T02:44:38.465020+09:00",
      updated_at: "2025-09-06T02:44:38.465048+09:00"
    },
    description: "LightGBM (Best Private Score)",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-06T02:44:34.436972+09:00",
    updated_at: "2025-09-06T02:44:38.423157+09:00"
  },
  {
    id: 120011,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112481,
      public_result: { RMSE: { value: "17949.2595", rank: true, decs: false } },
      private_result: { RMSE: { value: "15251.0962", rank: true, decs: false } },
      created_at: "2025-09-05T22:33:01.570596+09:00",
      updated_at: "2025-09-05T22:33:01.570624+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-05T22:32:56.838553+09:00",
    updated_at: "2025-09-05T22:33:01.525138+09:00"
  },
  {
    id: 120003,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112473,
      public_result: { RMSE: { value: "18587.6257", rank: true, decs: false } },
      private_result: { RMSE: { value: "15063.6288", rank: true, decs: false } },
      created_at: "2025-09-05T21:14:49.106671+09:00",
      updated_at: "2025-09-05T21:14:49.106697+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-05T21:14:46.958054+09:00",
    updated_at: "2025-09-05T21:14:49.061390+09:00"
  },
  {
    id: 119966,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112439,
      public_result: { RMSE: { value: "16906.0106", rank: true, decs: false } },
      private_result: { RMSE: { value: "14192.3673", rank: true, decs: false } },
      created_at: "2025-09-05T15:16:41.772886+09:00",
      updated_at: "2025-09-05T15:16:41.772920+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-05T15:16:37.205777+09:00",
    updated_at: "2025-09-05T15:16:41.725247+09:00"
  },
  {
    id: 119945,
    competition: 371,
    user: { id: 4579, image_url: USER_PROFILE.avatar, email: USER_PROFILE.email, nickname: USER_PROFILE.nickname },
    record: {
      id: 112418,
      public_result: { RMSE: { value: "17013.3450", rank: true, decs: false } },
      private_result: { RMSE: { value: "14357.0440", rank: true, decs: false } },
      created_at: "2025-09-05T12:12:24.025635+09:00",
      updated_at: "2025-09-05T12:12:24.025691+09:00"
    },
    description: "LightGBM",
    log: "",
    phase: "Finished",
    final: false,
    created_at: "2025-09-05T12:12:21.841729+09:00",
    updated_at: "2025-09-05T12:12:23.988076+09:00"
  }
];
