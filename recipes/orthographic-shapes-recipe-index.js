

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

const OrthographicShapesRecipes = () => {
    const cardsData = [
        null,
        orthographic_shapes,
        null
    ]
    React.useEffect(() => {
        snippets = []
    }
    ), [currentData];
    const [currentData] = React.useState({})
    const renderCards = cardsData.map((data, index) => !!data ? <RecipeCard key={index} title={data.title} description={data.description} data={data} modalId={`modal${index}`} /> : null)
    return (
        <div className="container overflow-hidden" >
            <div class="row gy-5">
                {renderCards}
            </div>

        </div>
    )
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



const Modal = ({ currentData, modalId }) => {

    const showCopyAlert = () => {
        const alert = document.getElementById("copy-alert-msg");
        setTimeout(() => alert.classList.toggle("show"), 2000);
    };

    const copyFunction = () => {
        console.log(currentData.fullJson)
        navigator.clipboard.writeText(JSON.stringify(JSON.parse(currentData.fullJson)));
        showCopyAlert();
    };
    return (
        <div className="modal fade" id={`${modalId}`} aria-hidden="true" aria-labelledby="custom-modal-label" style={{ zIndex: 9999, background: 'rgba(0, 0, 0, 0.5)' }}
            tabIndex="-1">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header" data-bs-theme="dark">
                        <h1 className="modal-title" id="custom-modal-label">{currentData.title}</h1>
                        <button type="button" class="btn-close btn-close-white" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1H4.5C3.4 1 2.5 1.9 2.5 3V17H4.5V3H16.5V1ZM19.5 5H8.5C7.4 5 6.5 5.9 6.5 7V21C6.5 22.1 7.4 23 8.5 23H19.5C20.6 23 21.5 22.1 21.5 21V7C21.5 5.9 20.6 5 19.5 5ZM8.5 21H19.5V7H8.5V21Z" fill="#765DD8" />
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


const RecipeCard = ({ data, modalId }) => {
    return (
        <div class="col-sm-6 mb-3 mb-sm-0 d-flex justify-content-center">
            <div className="card d-flex flex-row" style={{ width: "20rem" }}>
                <div className="flex-column">
                    <svg style={{ marginLeft: "15px", marginTop: "20px" }} width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8184 -3.05176e-05C16.4504 -1.90031e-05 58.2334 -3.05176e-05 58.2334 -3.05176e-05C58.2334 -3.05176e-05 55.2724 16.8374 43.4284 17.1675C31.5844 17.4976 1.31641 17.1675 1.31641 17.1675C1.31641 17.1675 11.1864 -4.20321e-05 13.8184 -3.05176e-05Z" fill="#1DB55A" />
                        <path d="M12.7188 40.9374C15.3964 40.9374 57.904 40.9374 57.904 40.9374C57.904 40.9374 54.8916 57.6321 42.8422 57.9594C30.7929 58.2868 0 57.9595 0 57.9595C0 57.9595 10.0412 40.9374 12.7188 40.9374Z" fill="#1DB55A" />
                        <path d="M45.3731 20.4694C39.2166 20.4694 0.657341 20.4694 0.657341 20.4694C0.657341 20.4694 1.3054 37.6369 16.2106 37.6369C31.1159 37.6369 56.066 37.6369 57.6862 37.6369C59.3063 37.6369 51.5296 20.4694 45.3731 20.4694Z" fill="#1DB55A" />
                    </svg>
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <button className="btn btn-primary mt-auto" data-bs-target={`#${modalId}`} data-bs-toggle="modal" onClick={() => { }}>Open
                        Recipe</button>
                    <Modal currentData={data} modalId={modalId} />
                </div>
            </div>
        </div>
    )


}


ReactDOM.render(<OrthographicShapesRecipes />, document.querySelector('#root-orthographic-shape-recipes'));