import { auth, app } from "../config/firebase.js";

class Schedule {
    static async index() {
        const snapshot = await app.ref("jadwal_ujian").once("value");
        const data = snapshot.val();

        return data;
    }

    static async get(uid) {
        const snapshot = await app.ref(`jadwal_ujian/${uid}`).once("value");
        const data = snapshot.val();

        return data;
    }

    static async store(objData) {
        const id = app.ref(`jadwal_ujian`).push();

        await id.set(objData);
    }
}

export default Schedule;
