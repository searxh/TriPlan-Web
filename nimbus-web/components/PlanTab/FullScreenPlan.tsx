import React from "react";
import FolderFullDynamic from "./FolderFullDynamic";
import { testData } from "@/test_data/testData";
import usePlanTab from "@/hooks/usePlanTab";
interface IProps {
    openFullTab: any;
    closeFullTab: any;
}

const FullScreenPlan = (props: IProps) => {
    const { currentView, incrementView, decrementView } = usePlanTab();
    return (
        <>
            <FolderFullDynamic
                expand={props.openFullTab}
                onClose={props.closeFullTab}
                currentView={currentView}
            />
            {testData.length > 3 && (
                <div className="absolute top-0 right-0 w-[8.5rem] h-16  ">
                    <div className="grid  w-[8.5rem] h-16 place-items-center items-center">
                        <div className="text-center">
                            <button
                                className="text-blue-500 font-extrabold"
                                onClick={decrementView}
                            >
                                {" "}
                                {"<<"}
                            </button>{" "}
                            Day {currentView + 1}-{currentView + 3}{" "}
                            <button
                                className="text-blue-500 font-extrabold"
                                onClick={incrementView}
                            >
                                {" "}
                                {">>"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FullScreenPlan;
