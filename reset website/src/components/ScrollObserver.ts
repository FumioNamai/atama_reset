
  export  class ScrollObserver {
    els: NodeListOf<Element>;
    cb:(el: Element, isIntersecting:boolean) => void;
    options: IntersectionObserverInit;
    observer: IntersectionObserver;
      constructor(els:string, cb: (el:Element,isIntersecting:boolean) => void, options: IntersectionObserverInit) {
        //監視対象のelementsを取得
        this.els = document.querySelectorAll(els);
        //オプションのデフォルト設定を定義
        const defaultOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        };
        this.cb = cb;
        //デフォルト設定に、個別設定のオプションをマージする
        this.options = Object.assign(defaultOptions, options);
        //
        this._init();
      }
      _init() {
        const callback = (entries) => {
          entries.forEach((entry) => {
            //監視対象の要素が領域内に入った場合の処理
            if (entry.isIntersecting) {
              this.cb(entry.target, true)
            } else { //else以下がScrollObserverUnobserveコンポーネントと違う
                this.cb(entry.target, false); //true=isIntersectingがfaulse
                //処理後に監視を切る処理
                // observer.unobserve(entry.target);
            }
          });
        };
        const observer = new IntersectionObserver(
          callback.bind(this),
          this.options
        );
        //対象の要素elを監視
        this.els.forEach((el) => observer.observe(el));
      }
    }
