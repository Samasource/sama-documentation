

const syntaxHighlight = (json) => {
    if (!json) return ""; //no JSON from response

    json = json
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    const parsedJson = json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function (match) {
            var cls = "number";
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            else {
                cls = "pun"
            }
            return '<span class="' + cls + '">' + match + "</span>";
        }
    );

    return (parsedJson)
}


let snippets = []
const prettier = (code) => {
    if (!code) return null
    const codeString = syntaxHighlight(code)
    const splitLines = codeString.split('\n')
    const lines = splitLines.map((line, index) => <li className={`L${index % 10}`} dangerouslySetInnerHTML={{
        __html: line
    }} />)

    return <ol className="linenums">
        {lines}
    </ol>
}
const Card = ({ title, description, imgSrc, data, setCurrentData }) => {

    return (
        <div className="col-sm-6 mb-3 mb-sm-0 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imgSrc}
                    className="card-img-top" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary mt-auto" data-bs-target="#custom-modal" data-bs-toggle="modal" onClick={() => setCurrentData(data)}>Open
                        Recipe</button>
                </div>
            </div>
        </div >)
}

const CodeBlock = ({ title, code, id }) => {
    const renderTitle = title ? <h4>{title}</h4> : ""
    const renderCode = code ? <pre className="prettyprint linenums"  >{prettier(code)}</pre> : ""
    return (
        <div id={id}>
            {renderTitle}
            {renderCode}
        </div>
    )
}

const SubStep = ({ title, description, id, code }) => {
    if (code) {
        snippets.push(<CodeBlock title={title} description={description} id={id} code={code} />)
    }
    return (
        <div className="card p-1 mb-2" id={`${id}-accordion`}>
            <div className="card-header  border-bottom-0" id={`${id}-description`}>
                <h5 className="mb-0">
                    <button className="btn btn-link"
                        onClick={() => { window.location.href = `#${id}` }}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${id}-collapse`} aria-expanded="false"
                        aria-controls={`${id}-collapse`}>
                        {title}
                    </button>
                </h5>
            </div>
            <div className="collapse" id={`${id}-collapse`}
                aria-labelledby={`${id}`}>
                <div className="card-body" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )
}

const Step = ({ title, description, id, subsections = [], code }) => {
    if (code) {
        snippets.push(<CodeBlock title={title} description={description} id={id} code={code} />)
    }

    const renderSubsections = subsections.map(({ id, displayName, description, code }) => <SubStep key={id} title={displayName} description={description} id={id} code={code} />)

    const renderDescription = description && <div className="card-body" dangerouslySetInnerHTML={{ __html: description }} />
    return (
        <div className="card p-1 mb-2" id={`${id}-accordion`}>
            <div className="card-header  border-bottom-0" id={`${id}-description`}>
                <h5 className="mb-0">

                    <button className="btn btn-link"
                        onClick={() => { window.location.href = `#${id}` }}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${id}-collapse`} aria-expanded="false"
                        aria-controls={`${id}-collapse`}>
                        {title}
                    </button>
                </h5>
            </div>
            <div className="collapse" id={`${id}-collapse`}
                aria-labelledby={`${id}`}>
                {renderDescription}
                {renderSubsections}
            </div>

        </div>
    )
}

const ModalSteps = ({ currentData }) => {
    const renderSteps = currentData.steps ? currentData.steps.map(({ displayName, description, id, subsections, code }) => <Step key={id} title={displayName} description={description} id={id} subsections={subsections} code={code} />) : null

    return renderSteps
}

const CodeSnipets = () => {

    return (
        <div id="codeContent"></div>
    )
}

const FullJson = ({ currentData }) => {
    if (!currentData || !currentData.fullJson) return null

    return <pre className="prettyprint "  >{prettier(currentData.fullJson)}</pre>
}



const Modal = ({ currentData }) => {
    const showCopyAlert = () => {
        const alert = document.getElementById("copy-alert-msg");
        alert.classList.toggle("show");
        setTimeout(() => alert.classList.toggle("show"), 2000);
    };

    const copyFunction = () => {
        navigator.clipboard.writeText(JSON.stringify(JSON.parse(currentData.fullJson)));
        showCopyAlert();
    };
    return (
        <div className="modal fade" id="custom-modal" aria-hidden="true" aria-labelledby="custom-modal-label" style={{ zIndex: 9999, background: 'rgba(0, 0, 0, 0.5)' }}
            tabIndex="-1">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="custom-modal-label">{currentData.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-4">
                                <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                                    <div className="sticky-top">
                                        <nav className="nav nav-pills scroll-container flex-nowrap" id="index_container">
                                            <ModalSteps currentData={currentData} />
                                        </nav>
                                    </div>
                                </nav>
                            </div>

                            <div className="col-8">
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true"
                                    className="scrollspy-example-2" tabIndex="0">
                                    <div id="${id}" className="${id} pb-4">
                                        <div className="row p-1">
                                            <h4>JSON</h4>

                                        </div>
                                        <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#i-s-c-json-collapse" aria-expanded="false"
                                            aria-controls="i-s-c-json-collapse">
                                            Click to check the complete JSON
                                        </button>
                                        <div className="collapse" id="i-s-c-json-collapse">
                                            <div className="card card-body border-0">
                                                <div className="d-flex flex-row-reverse">
                                                    <button type="button" id="sama-copy-button"
                                                        className="btn btn-light bg-white border-0 p-3 mb-2 bg-white"
                                                        onClick={copyFunction}>
                                                        <svg width="25px" height="25px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <g id="icomoon-ignore">
                                                            </g>
                                                            <path d="M27.845 7.385l-5.384-5.384h-11.845v4.307h-6.461v23.69h17.229v-4.307h6.461v-18.306zM22.461 3.524l3.861 3.861h-3.861v-3.861zM5.232 28.922v-21.537h9.692v5.384h5.384v16.153h-15.076zM16 7.831l3.861 3.861h-3.861v-3.861zM21.384 24.615v-12.922l-5.384-5.384h-4.307v-3.231h9.692v5.384h5.384v16.153h-5.384z" fill="#000000">

                                                            </path>
                                                        </svg>
                                                        &nbsp;
                                                    </button>
                                                    <div className="alert alert-success copy-alert" id="copy-alert-msg"
                                                        role="alert">
                                                        Copied!
                                                    </div>
                                                </div>
                                                <FullJson id="json-content" currentData={currentData} />
                                            </div>
                                        </div>
                                        {snippets}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const InstanceSegmentationRecipes = () => {
    const cardsData = [
        i_s_creation_data,
        i_s_delivery_data,
    ]

    React.useEffect(() => {
        snippets = []
    }
    ), [currentData];



    const [currentData, setCurrentData] = React.useState({})

    const dataChange = (data) => {
        setCurrentData(data);
    }

    const renderCards = cardsData.map((data, index) => <Card key={index} title={data.title} description={data.description} imgSrc={data.cardImg} data={data} setCurrentData={setCurrentData} />)
    return (
        <div className="container overflow-hidden">
            <div className="row gy-5 ">
                {renderCards}
            </div>
            <Modal currentData={currentData} />
        </div>)
}



ReactDOM.render(<InstanceSegmentationRecipes />, document.querySelector('#root-instance-segmentation-recipes'));