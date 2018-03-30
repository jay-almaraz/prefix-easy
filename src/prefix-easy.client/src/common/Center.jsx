import * as React from 'react';

export class Center extends React.Component {
    render() {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    backgroundImage: this.props.backgroundImage
                }}
            >
                <div
                    style={{
                    }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class CenterSection extends React.Component {
    render() {
        return (
            <section
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    backgroundImage: "url(" + this.props.backgroundImage + ")",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div
                    style={{
                    }}
                >
                    {this.props.children}
                </div>
            </section>
        );
    }
}