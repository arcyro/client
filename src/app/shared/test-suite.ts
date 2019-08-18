export class TestSuite {
  name: string;
  time: number;
  tests: number;
  skipped: number;
  errors: number;
  failures: number;
  messages: Array<string>
}
