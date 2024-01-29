import Navigation from "./components/Navigation.jsx";
import SettingsTable from "./components/SettingsTable.jsx";
import {createContext, useState} from "react";
import ActiveContainer from "./components/ActiveContainer.jsx";

const projectPath = (ref) => ('BASE_DIR \\ ').concat(ref);

const SettingsContext = createContext();

const SettingsProvider = ({children}) => {
    const [activeControl, setActiveControl] = useState('SettingsTable');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => setModalIsOpen(!modalIsOpen);
    const [settings, setSettings] = useState({
        SECRET_KEY: 'WRAPH_INSECURE' + (Math.random() + 1).toString(36).substring(2),
        DEBUG: true,
        ALLOWED_HOSTS: ['*'],
        INSTALLED_APPS: [
            'django.contrib.admin',
            'django.contrib.auth',
            'django.contrib.contenttypes',
            'django.contrib.sessions',
            'django.contrib.messages',
            'django.contrib.staticfiles',
        ],
        MIDDLEWARE: [
            'django.middleware.security.SecurityMiddleware',
            'django.contrib.sessions.middleware.SessionMiddleware',
            'django.middleware.common.CommonMiddleware',
            'django.middleware.csrf.CsrfViewMiddleware',
            'django.contrib.auth.middleware.AuthenticationMiddleware',
            'django.contrib.messages.middleware.MessageMiddleware',
            'django.middleware.clickjacking.XFrameOptionsMiddleware',
        ],
        ROOT_URLCONF: 'config.urls',
        TEMPLATES: [
            {
                'BACKEND': 'django.template.backends.django.DjangoTemplates',
                'DIRS': [],
                'APP_DIRS': true,
                'OPTIONS': {
                    'context_processors': [
                        'django.template.context_processors.debug',
                        'django.template.context_processors.request',
                        'django.contrib.auth.context_processors.auth',
                        'django.contrib.messages.context_processors.messages',
                    ],
                },
            },
        ],
        WSGI_APPLICATION: 'config.wsgi.application',
        DATABASES: {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': projectPath('db.sqlite3'),
            }
        },
        AUTH_PASSWORD_VALIDATORS: [
            {
                'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
            },
            {
                'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
            },
            {
                'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
            },
            {
                'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
            },
        ],
        LANGUAGE_CODE: 'en-US',
        TIME_ZONE: 'UTC',
        USE_I18N: true,
        USE_L10N: true,
        USE_TZ: true,
        STATIC_URL: '/static/',
        STATIC_ROOT: projectPath('staticfiles'),
    })
    const modifySettings = (settingsChanges) => {
        Object.keys(settings).forEach(key => {
            Object.keys(settingsChanges).forEach(paramKey => {
                if(key === paramKey){
                    settings[key] = settingsChanges[paramKey]
                }
            })
        })
    }

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <SettingsContext.Provider value={{settings, modalIsOpen, toggleModal, activeControl, setActiveControl}}>
            {children}
        </SettingsContext.Provider>
    )
}

function App() {
    return (
        <SettingsProvider>
            <Navigation/>
            <ActiveContainer/>
        </SettingsProvider>
    )
}

export {App, SettingsContext}