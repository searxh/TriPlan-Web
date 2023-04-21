import Card from "@/components/Cards/Card";
import React from "react";
import useGridColumns from "@/hooks/useGridColumns";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import SavedPlanCard from "./SavedPlanCard";

interface IProps {
    planList: Array<unknown>;
}

const PlanCard = ({ planList }: IProps) => {
    const [expand, setExpand] = React.useState<boolean>(false);
    const [cols, setCols] = React.useState<number>(0);
    const gridColumnsClass = useGridColumns("plan-card-container");

    const handleOnClick = () => {
        setExpand((prev) => !prev);
    };

    React.useEffect(() => {
        if (gridColumnsClass) setCols(Number(gridColumnsClass.split("-")[2]));
    }, [gridColumnsClass]);
    return (
        <div
            id="plan-card-container"
            className="flex flex-col md:w-[80%] w-full mx-auto"
        >
            <div
                className="text-xl font-semibold text-neutral-500
                 border-b-neutral-500 border-b-[1px] pb-1 md:mx-0 mx-3"
            >
                SAVED PLANS
            </div>
            <div
                style={{
                    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                }}
                className={`grid gap-5 w-fit mx-auto my-5`}
            >
                {!expand && planList.length > cols
                    ? [...planList].splice(0, cols).map((params: any) => (
                          <div key={params.name}>
                              <SavedPlanCard planParams={params} />
                          </div>
                      ))
                    : planList.map((params: any) => (
                          <div key={params.name}>
                              <SavedPlanCard planParams={params} />
                          </div>
                      ))}
            </div>
            {planList.length > cols ? (
                <button
                    onClick={handleOnClick}
                    className="text-tricolorgreen mx-auto w-52"
                >
                    {expand ? (
                        <div>
                            Close <ExpandLessRoundedIcon />
                        </div>
                    ) : (
                        <div>
                            Expand <ExpandMoreRoundedIcon />
                        </div>
                    )}
                </button>
            ) : null}
        </div>
    );
};

export default PlanCard;
