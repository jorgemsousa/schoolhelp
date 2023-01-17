import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type StudentDTO = {
  grades: string,
  media: string,
  name: string,
  school: string,
  series: string,
  status: "open" | "closed",
  subjects: Array<string>,
  created_at: FirebaseFirestoreTypes.Timestamp,
  closed_at?: FirebaseFirestoreTypes.Timestamp
}