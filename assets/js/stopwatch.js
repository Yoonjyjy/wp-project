//스탑워치

class StopWatch {
  constructor(element) {
    this.timer = element;
    this.time = 0;
    this._render();
    
  }

  get isStart() {
    return !!this.intervalId;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.time++;
      this._render();
    }, 10);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  record() {
    let record = document.querySelector('.recordLineContent');
    let subRecord = document.createElement('li');
    subRecord.textContent = this.timer.innerHTML;
    record.appendChild(subRecord);
  }

  clear() {
    this.stop();
    this.time = 0;
    let record = document.querySelector('.recordLineContent');
    record.textContent = '';

    this._render();
  }

  _render() {
    const tenMs = `${this.time % 100}`.padStart(2, '0');
    const sec = `${parseInt(this.time / 100) % 60}`.padStart(2, '0');
    const min = `${parseInt(this.time / 6000)}`.padStart(2, '0');
    this.timer.innerHTML = `${min}:${sec}:${tenMs}`;
  }
}
