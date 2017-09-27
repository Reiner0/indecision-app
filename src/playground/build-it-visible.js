// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

let isVisible = false;

const toggleVisiblity = () => {
    isVisible = !isVisible;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisiblity}>
                {isVisible ? 'Hide Details' : 'Show Details'}
            </button>
            {isVisible && (
                <div>
                    <p>These are the hidden details</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();