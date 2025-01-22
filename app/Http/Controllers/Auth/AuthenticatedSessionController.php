<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */

    public function store(LoginRequest $request): RedirectResponse
    {
        Log::info('Starting authentication process.');

        $request->authenticate();

        Log::info('User authenticated successfully.');

        $request->session()->regenerate();

        $user = Auth::user();
        Log::info('Authenticated user:', ['id' => $user->id, 'email' => $user->email]);

        if ($user->hasRole('admin')) {
            Log::info('User is admin.');
            return redirect()->intended(route('admin.dashboard', absolute: false));
        } elseif ($user->hasRole('customer')) {
            Log::info('User is customer.');
            return redirect()->intended(route('customer.dashboard', absolute: false));
        } else {
            Log::info('User has no specific role, redirecting to default.');
            return redirect()->intended(route('default', absolute: false));
        }
    }


    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
