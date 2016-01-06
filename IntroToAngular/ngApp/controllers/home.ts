namespace IntroToAngular.Controllers {

    export class HomeController {

        public val1: number;
        public val2: number;

        public total: number;

        public op: string;

        public add(): void {
            console.log(this.op);
            switch (this.op) {
                case '+':
                    console.log('add');
                    this.total = this.val1 + this.val2;
                    break;
                case '-': this.total = this.val1 - this.val2;
                    break;
                case '*': this.total = this.val1 * this.val2;
                    break;
                case '/': this.total = this.val1 / this.val2;
                    break;
            }
        }
    }
}