'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">appser-pro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' : 'data-target="#xs-components-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' :
                                            'id="xs-components-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GaugeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GaugeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IcfesModulesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IcfesModulesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IcfesTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IcfesTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultipleSelectionQuestionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultipleSelectionQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SummaryTestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SummaryTestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' : 'data-target="#xs-directives-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' :
                                        'id="xs-directives-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' }>
                                        <li class="link">
                                            <a href="directives/DynamicChildLoaderDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicChildLoaderDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' : 'data-target="#xs-injectables-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' :
                                        'id="xs-injectables-links-module-AppModule-b46ade3f4c28c0721862c119a154f46a6b01aba09aa0da96c5f5d655f0f2c44996cfdb20b73c3bd1a45b260ee322c48690090773cfe92aa6d20030f465911365"' }>
                                        <li class="link">
                                            <a href="injectables/QuestionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Answer.html" data-type="entity-link" >Answer</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/FinalScore.html" data-type="entity-link" >FinalScore</a>
                            </li>
                            <li class="link">
                                <a href="classes/IcfesModule.html" data-type="entity-link" >IcfesModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/IcfesTest.html" data-type="entity-link" >IcfesTest</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginModel.html" data-type="entity-link" >LoginModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/profile.html" data-type="entity-link" >profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link" >Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/session.html" data-type="entity-link" >session</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthguardssService.html" data-type="entity-link" >AuthguardssService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GradeService.html" data-type="entity-link" >GradeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionsService.html" data-type="entity-link" >QuestionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/userImageService.html" data-type="entity-link" >userImageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserSettingsVariablesService.html" data-type="entity-link" >UserSettingsVariablesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthguardService.html" data-type="entity-link" >AuthguardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});