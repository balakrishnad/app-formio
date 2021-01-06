import React, { Component } from 'react';

class Check extends Component {
    constructor() {
        super();

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        // this.fetchAPI();
    }

    fetchAPI = () => {
        this.setState({ array: [{ name: 'Name1', age: 0, add: [1, 2] }, { name: 'Name2', age: 0, add: [3, 4] }] }, this.test);
    };

    // test = async () => {
    //     const { array } = this.state;

    //     await array.forEach(async a => {
    //         if (true) {
    //             const response = await axios.get('');

    //             a.score = await response.value;

    //             await this.setState({ array });
    //         }
    //     });
    // }

    test = async () => {
        const { array } = this.state;

        await array.forEach(a => {
            a.add.forEach(async d => {
                // const response = await axios.get('');

                const wait = () => new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        console.log('resolve timeout');
                    }, 1500);
                });
                // await console.log('dfdfsdfsd');
                // debugger;

                console.time("Slept for")
                await wait();
                a.age = await a.age + d;
                console.timeEnd("Slept for")

                await this.setState({ array }, () => {
                    console.log('setState')
                });
            })
        });
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.array)}
            </div>
        )
    }
}

export default Check;