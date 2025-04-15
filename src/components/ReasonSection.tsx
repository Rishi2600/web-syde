import { faLightbulb, faLightbulb as faLightbulbRegular } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReasonSection() {
    return (
        <>
            <div className="relative py-14 box-border">
                <div className="container">
                    <div className="transform-none opacity-100 translate-y-24  origin-top transition-all duration-1000">
                        <div className="row -mx-11 flex-wrap text-secondary">

                            <div className="px-11 box-border">
                                <div className="text-2xl">You may need our services if you want to: </div>
                            </div>

                            <div className="px-11">
                                <div className="mb-28 pl-8">
                                    <ul className="pl-0 list-none">

                                        <li className="mb-11 relative">
                                            <div className="flex items-start transform-none ">
                                                <span className="inline-block min-h-8 -mt-2 min-w-8 mr-6">
{/* TODO: FIX THIS  */}
                                                {/* <FontAwesomeIcon icon={['far', 'lightbulb']}
                                                style={{color: "#26A0f8",}} /> */}
                                                <FontAwesomeIcon icon={faLightbulb} style={{color: "#26A0f8",}} />   
                                                </span>

{/* TODO: FIX HERE RESIZE THE TEXT  */}
                                                <span className="text-pretty text-base leading-10 ">
                                                    Create an MVP to attract investors and test your business idea
                                                </span>
                                            </div>
                                        </li>
                                        <li className="mb-11 relative">
                                            <div className="flex items-start transform-none ">
                                                <span className="inline-block min-h-8 -mt-2 min-w-8 mr-6">
{/* TODO: FIX THIS  */}
                                                {/* <FontAwesomeIcon icon={['far', 'lightbulb']}
                                                style={{color: "#26A0f8",}} /> */}
                                                <FontAwesomeIcon icon={faLightbulb} style={{color: "#26A0f8",}} />   
                                                </span>

{/* TODO: FIX HERE RESIZE THE TEXT  */}
                                                <span className="text-pretty text-base leading-10 ">
                                                    Create an MVP to attract investors and test your business idea
                                                </span>
                                            </div>
                                        </li>
                                        <li className="mb-11 relative">
                                            <div className="flex items-start transform-none ">
                                                <span className="inline-block min-h-8 -mt-2 min-w-8 mr-6">
{/* TODO: FIX THIS  */}
                                                {/* <FontAwesomeIcon icon={['far', 'lightbulb']}
                                                style={{color: "#26A0f8",}} /> */}
                                                <FontAwesomeIcon icon={faLightbulb} style={{color: "#26A0f8",}} />   
                                                </span>

{/* TODO: FIX HERE RESIZE THE TEXT  */}
                                                <span className="text-pretty text-base leading-10 ">
                                                    Create an MVP to attract investors and test your business idea
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}