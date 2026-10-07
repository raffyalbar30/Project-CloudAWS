const additionalInformation = [
    "GCP Pay As Go 10£ Payment Required",
    "GCP Pay As Go 20 CAD Payment Required", 
    "GCP $300 + 10$ Prepaid", 
    "GCP Payment Required Random", 
    "GCP Pay As Go ¥1.500(10$)", 
    "Payment Required"
];

function AdditionalCloud() {
    return (
        <section className="w-full">
    <h2 className="mb-3 text-2xl font-semibold text-gray-900">
        Additional information
    </h2>

    <div className="grid grid-cols-[120px_1fr] border border-gray-300 text-sm lg:grid-cols-[150px_1fr] lg:text-base">

        {/* Label */}
        <div className="border-r border-gray-300 p-3 font-medium text-gray-800">
            Choose An Option
        </div>

        {/* Options */}
        <div className="p-3 leading-relaxed text-gray-600">
            {additionalInformation.map((item, index) => (
                <span key={index}>
                    {item}
                    {index !== additionalInformation.length - 1 && ", "}
                </span>
            ))}
        </div>

    </div>
</section>
    );
}

export default AdditionalCloud;