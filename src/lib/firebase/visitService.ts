import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";
import { CollectionName } from "../constants/CollectionName";


export class VisitService {
  private visitRef = doc(db, CollectionName.DAILY_VISITS, "visits");

  /**
   * Tambah 1 kunjungan total
   */
  async countVisit(): Promise<void> {
    const docSnap = await getDoc(this.visitRef);

    if (docSnap.exists()) {
      await updateDoc(this.visitRef, {
        count: increment(1),
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(this.visitRef, {
        count: 1,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  }

  /**
   * Ambil total kunjungan
   */
  async getTotalCount(): Promise<number> {
    const docSnap = await getDoc(this.visitRef);
    if (!docSnap.exists()) return 0;

    return docSnap.data().count || 0;
  }
}
