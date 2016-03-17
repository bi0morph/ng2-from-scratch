interface Application {
    name: string;
}

class App implements Application {
    name = '';
    constructor(name: string) {
        this.name = name;
        alert(name);
    }
}

new App('hello');