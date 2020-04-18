import goal from "../../assets/goal.svg";
import alert from "../../assets/alert.svg";
import safe from "../../assets/safe.svg";
import advice from "../../assets/advice.svg";

const data = [
  {
    title: "الهدف",
    desc:
      "الهدف من هذا التطبيق هو المساعدة في الكشف المبكر عن امكانية الإصابة بفيروس الكورونا والتواصل مع الجهات الصحية لتقديم الخدمات المناسبة.",
    iconLink: goal,
  },

  {
    title: "احذر",
    desc:
      "لا يجوز إعتبار هذا التطبيق بديلا عن الطبيب، خصوصا في تحديد التشخيص النهائي.",
    iconLink: alert,
  },

  {
    title: "نصيحة",
    desc:
      "ينصح بإستخدام التطبيق لمرة ثانية أو أكثر إذا شعرت بظهور أعراض جديدة أو اذا كان لديك مخالطة لأشخاص يشتبه بإصابتهم.",
    iconLink: advice,
  },

  {
    title: "الأمان",
    desc: "سيتم التعامل مع البيانات المقدمة باحترام لخصوصية الافراد.",
    iconLink: safe,
  },
];

export default data;
