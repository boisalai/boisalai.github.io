const Home = {
    template: `
        <div class="container mt-5">
            <div class="container">
                <div class="row align-items-start">
                    <div class="col-sm-auto col-sm" style="text-align: center;">
                        <img src="assets/img/alain.jpeg" class="author_avatar" alt="Alain Boisvert" style="margin-bottom: 10px;"><br>
                    </div>
                    <div class="col-sm">
                        <h1>Alain Boisvert, MBA</h1>

                        <div class="social"> 
                            <div class="contact-icons"> 
                                <a href="mailto:ay.boisvert@gmail.com" title="email" target="_blank"><i class="fas fa-envelope"></i></a> 
                                <a href="https://github.com/boisalai/" title="GitHub" target="_blank"><i class="fab fa-github"></i></a> 
                                <a href="https://www.linkedin.com/in/alain-boisvert-98b058156/" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a> 
                            </div>
                        </div>

                        <span v-html="$t('about.text1')"></span>
                        <span v-html="$t('about.download_cv')"></span>
                    </div>
                </div>
            </div>
        </div>`,
};