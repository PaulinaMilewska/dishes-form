const ButtonsResult = ({ data, reset, setValue }) => {
    return (
        <>
            {data && (
                <pre style={{ textAlign: "left", color: "white", fontSize: "16px" }}>
                    {JSON.stringify(
                        {
                            ...data,
                        },
                        null,
                        2
                    )}
                </pre>
            )}
            <button className="button">submit</button>
        </>
    );
};
export default ButtonsResult;
