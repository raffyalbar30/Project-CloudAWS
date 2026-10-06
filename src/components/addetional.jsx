const additionalInformation = [
    "AWS Free Trial",
    "AWS 8VCPU",
    "AWS 32 VCPU",
    "AWS 64 VCPU",
    "AWS 128 VCPU",
    "AWS 256 VCPU",
    "AWS 512 VCPU",
    "AWS 1k Credit",
    "AWS 5k Credit",
    "AWS 10k Credit",
    "AWS 25k Credit",
    "AWS 50k Credit",
    "AWS 100k Credit",
    "AWS AI Bedrock 10 RPM 5VCPU",
    "AWS AI Bedrock 50 RPM 5VCPU",
    "AWS AI Bedrock 100 RPM 32VCPU",
    "AWS AI Bedrock 10 RPM 256VCPUs",
    "Kiro Enabled Account",
    "AWS Bedrock 256VCPUs 10K RPM - 4.6, 4.7, 4.8, F5 Supported",
    "AWS Bedrock 384VCPUs 10K RPM - 4.6, 4.7, 4.8, F5 Supported",
    "AWS Bedrock 512VCPUs 10K RPM - 4.6, 4.7, 4.8, F5 Supported",
    "AWS Bedrock 1024VCPUs 10K RPM - 4.6, 4.7, 4.8, F5 Supported",
    "AWS Bedrock 1204VCPUs 10K RPM - 4.6, 4.7, 4.8, F5 Supported",
];

function AdditionalInformation() {
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

export default AdditionalInformation;