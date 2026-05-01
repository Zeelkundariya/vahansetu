import axios from 'axios';
import { showToast } from '../components/Toast';

const api = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});

// REQUEST INTERCEPTOR: Attach telemetry/security headers
api.interceptors.request.use(config => {
  config.headers['X-Vahan-Client'] = 'VahanSetu-Nexus-2026';
  return config;
}, error => Promise.reject(error));

// RESPONSE INTERCEPTOR: Global Error Shield
api.interceptors.response.use(
  response => response,
  error => {
    const { status, config } = error.response || {};
    const isPublicPage = window.location.pathname === '/';
    const isMeRequest = config?.url?.includes('/api/me');
    
    if (status === 401) {
      // Avoid redirect loops and "expired" toasts on the landing page during initial load
      if (!isPublicPage && !isMeRequest) {
        console.warn("🛡️ Security Protocol: Session invalid. Redirecting to Nexus.");
        window.location.href = '/';
        showToast('🔒 Session expired. Please re-authenticate.', 'warning');
      }
    } else if (status >= 500) {
      showToast('⚠️ Subsystem Link Failure: Server error occurred.', 'error');
    } else if (error.code === 'ECONNABORTED') {
      showToast('📡 Connection Timeout: Signal lost.', 'error');
    }
    
    return Promise.reject(error);
  }
);

export { showToast, api };

export const login = (email, password) => api.post('/login', { email, password });
export const signup = (name, email, password) => api.post('/signup', { name, email, password });
export const logout = () => api.get('/logout');
export const getMe = () => api.get('/api/me');
export const getStations = (lat, lng) => api.get(`/api/stations${lat != null ? `?lat=${lat}&lng=${lng}` : ''}`);
export const getTripPlan = (params) => api.get('/api/trip_plan', { params });
export const getFleet = () => api.get('/api/fleet');
export const getCpo = () => api.get('/api/cpo_data');
export const getAnalytics = () => api.get('/api/analytics_data');
export const getAnalyticsFilter = (cycle) => api.get(`/api/analytics/filter?cycle=${cycle}`);
export const getProfile = () => api.get('/api/profile_data');
export const getNotifications = () => api.get('/api/notifications');
export const updateProfile = (name) => api.post('/api/profile/update', { name });
export const changePw = (current, newPw, confirm) => api.post('/api/change_password', { current_password: current, new_password: newPw, confirm_password: confirm });
export const verifyPremium = (payment_id, plan) => api.post('/api/premium/verify', { payment_id, plan });
export const cancelPremium = () => api.post('/api/premium/cancel');
export const addStation = (data) => api.post('/api/host/deploy', data);
export const deleteStation = (id) => api.delete(`/api/host/station/${id}`);

export default api;
