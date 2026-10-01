# Domain & DNS setup — 10X Wealth Creators ecosystem

## Target map

| Site | URL | GitHub repo |
|------|-----|-------------|
| **10X Wealth Creators** (main platform) | `https://10xwealthcreators.com` | `Sadhi-R/10X-Wealth-Creators-` |
| **Magical Mornings** | `https://magicalmornings.10xwealthcreators.com` | `Sadhi-R/Magical_Mornings` |
| **Dhruva Foundation** | `https://dhruva.10xwealthcreators.com` | `Sadhi-R/Dhruva_Foudation` |

All three publish as **static sites** (no backend).

---

## Hostinger DNS records

Go to: **Domain portfolio → 10xwealthcreators.com → DNS / Nameservers → DNS records**

### Keep / confirm these apex records (GitHub Pages)

| Type | Name | Value / Points to | TTL |
|------|------|-------------------|-----|
| A | `@` | `185.199.108.153` | 3600 |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |
| CNAME | `www` | `sadhi-r.github.io` | 3600 |

### Add / confirm subdomains

| Type | Name | Value / Points to | TTL | Used by |
|------|------|-------------------|-----|---------|
| CNAME | `magicalmornings` | `sadhi-r.github.io` | 3600 | Magical Mornings (**add this**) |
| CNAME | `dhruva` | `sadhi-r.github.io` | 3600 | Dhruva (already added) |

> Do **not** point Magical Mornings or Dhruva with A records. Use **CNAME → sadhi-r.github.io**.

---

## GitHub Pages custom domains (each repo)

For each repo: **Settings → Pages**

1. **Source:** GitHub Actions (not “Deploy from a branch”)
2. **Custom domain:** set as in the table below, then wait for DNS + HTTPS

| Repo | Custom domain |
|------|----------------|
| `10X-Wealth-Creators-` | `10xwealthcreators.com` (+ `www` optional) |
| `Magical_Mornings` | `magicalmornings.10xwealthcreators.com` |
| `Dhruva_Foudation` | `dhruva.10xwealthcreators.com` |

> **10X Wealth Creators must NOT use `/docs` as the site path.** The app is built with base `/` and served at the domain root.


### 1) Magical Mornings — subdomain
Repo: https://github.com/Sadhi-R/Magical_Mornings/settings/pages  
Custom domain: `magicalmornings.10xwealthcreators.com`  
Enforce HTTPS when available.

### 2) 10X Wealth Creators — apex
Repo: https://github.com/Sadhi-R/10X-Wealth-Creators-/settings/pages  
Source: **GitHub Actions**  
Custom domain: `10xwealthcreators.com`  
Also tick **www** redirect if shown.  
Enforce HTTPS when available.

### 3) Dhruva — subdomain
Repo: https://github.com/Sadhi-R/Dhruva_Foudation/settings/pages  
Custom domain: `dhruva.10xwealthcreators.com`  
Enforce HTTPS when available.

---

## Order of operations

1. Add Hostinger CNAME: `magicalmornings` → `sadhi-r.github.io`
2. In Magical_Mornings Pages settings, set custom domain to `magicalmornings.10xwealthcreators.com` (removes apex from that repo)
3. In 10X-Wealth-Creators- Pages settings, set custom domain to `10xwealthcreators.com` + enable GitHub Actions deploy
4. Confirm Dhruva still shows `dhruva.10xwealthcreators.com`
5. Wait for DNS + SSL (minutes to a few hours)

## Checks

```text
https://dns.google/resolve?name=magicalmornings.10xwealthcreators.com&type=CNAME
https://dns.google/resolve?name=dhruva.10xwealthcreators.com&type=CNAME
https://dns.google/resolve?name=www.10xwealthcreators.com&type=CNAME
https://dns.google/resolve?name=10xwealthcreators.com&type=A
```
