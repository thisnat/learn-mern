import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="font-lnw bg-green-700 h-full py-20 text-pink-400">
                    <div className="pb-10">
                        <div className="text-7xl text-center">pp world domination !</div>
                    </div>
                    <div className="pt-10 text-center">
                        <img className="mx-auto" alt="not me lol" src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/pepe-the-frog/sticker_9.png?207ef57c8599e443acc1f0b0ff6723c4&d=200x200"/>
                        <div className="text-7xl">if you see this,<br/>shit went down</div>
                    </div>
                    <div className="pt-20 px-40">
                        <div className="font-what text-center text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam eum expedita, voluptate nam odit consectetur. Aliquid repudiandae dolore eos veniam modi ipsa a, recusandae aspernatur minima iusto qui enim?</div>
                        <br/>
                        <div className="font-what text-center text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam eum expedita, voluptate nam odit consectetur.</div>
                        <div className="mt-20 text-center text-4xl">
                            <p className="mb-10 text-7xl underline">lab list</p>
                            <a href="/cool">avant-garde wannabe</a>
                            <br/>
                            <a href="/lab1">lab1 - axios get</a>
                            <br/>
                            <a href="/lab2">lab2 - axios get with component used</a>
                            <br/>
                            <a href="/lab3">lab3 - fanboi.ch clone</a>
                            <br/>
                            <a href="/lab4">lab4 - mongodb 101</a>
                            <br/>
                            <a href="/lab5">lab5 - yet another to do list</a>
                            <br/>
                            <a href="/lab6">lab6 - github profile search</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;