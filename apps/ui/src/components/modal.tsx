import { useRouter } from "@tanstack/react-router";
import { indexRoute } from "../routes/route-definitions";
import { motion } from "framer-motion"
import { AiOutlineClose } from "react-icons/ai";

type Props = {
    title:string;
    children: any;
}

const Modal = (props: Props) => {
    const router = useRouter();

    const searchParams = indexRoute.useSearch()


    return (
        <>
            {searchParams.convert && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 bottom-0 left-0 bg-black z-50"
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed top-0 right-0 bottom-0 w-[25%] bg-white p-5 py-8 shadow-lg z-[1000] rounded-l-lg"
                    >
                        <div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2>{props.title}</h2>
                                </div>
                                <AiOutlineClose size={20} className="cursor-pointer" onClick={() => router.history.back()}/>

                            </div>

                            <div className="mt-6">
                                {props.children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}

        </>

    );
}

export default Modal