'use client';
import {FormEvent, useState} from "react";
import {saveInvoice} from "@/redux/thunks/invoice-thunks";
import {CreateInvoice} from "@/modules/invoice/create/domain/entities/invoice";
import {useAppDispatch} from "@/redux/stores/store";

const UseCreateInvoice = () => {
    const dispatch = useAppDispatch();
    const [state, setState] = useState<CreateInvoice>({
        articles: [],
        totalAmount: 0,
    });

    // const addArticle = (article: CreateInvoice['articles'][0]) => {
    //     setState((prevState) => {
    //         return {
    //             ...prevState,
    //             articles: [...prevState.articles, article],
    //         };
    //     });
    // };

    const addArticle = () => {
        setState((prevState) => {
            return {
                ...prevState,
                articles: [...prevState.articles, {
                    description: '',
                    price: 0,
                    quantity: 0,
                }],
            };
        });
    };

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(saveInvoice(state));
    };

    return {
        state,
        addArticle,
        onSubmit,
    };
};

export default UseCreateInvoice;
