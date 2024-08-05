import {InvoiceRepository} from "@/modules/invoice/domain/repositories/invoice-repository";
import {collection, doc, setDoc} from "@firebase/firestore";
import {db} from "@/shared/configs/firebase/firebase-config";
import {CreateInvoice} from "@/modules/invoice/create/domain/entities/invoice";

export const createFirebaseInvoiceRepository = (): InvoiceRepository<CreateInvoice> => {
    const collectionRef = collection(db, 'invoices');

    return {
        saveInvoice: async (invoice: CreateInvoice): Promise<void> => {
            const docRef = doc(collectionRef);
            await setDoc(docRef, invoice);
        },
    };
};
