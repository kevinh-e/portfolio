import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground font-serif">
              Sepia Theme Demo
            </h1>
            <p className="text-muted-foreground font-serif">
              A warm, earthy color palette inspired by Anthropic
            </p>
          </div>
          <ThemeToggle />
        </header>
        <Separator />
        {/* Typography Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground font-serif">
            Typography
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold font-serif mb-2">
                Libre Baskerville (Serif)
              </h3>
              <p className="font-serif text-foreground">
                The quick brown fox jumps over the lazy dog. This is the serif
                font used for headings and body text.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Atkinson Hyperlegible (Sans)
              </h3>
              <p className="text-foreground">
                The quick brown fox jumps over the lazy dog. This is the
                sans-serif font for UI elements and labels.
              </p>
            </div>
          </div>
        </section>
        <Separator />
        {/* Buttons Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground font-serif">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3 text-foreground font-serif">
              Accent Colors
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-sage-500 text-white hover:bg-sage-600">
                Sage 500
              </Button>
              <Button className="bg-terracotta text-primary-foreground hover:bg-terracotta/90">
                Terracotta
              </Button>
              <Button className="bg-clay text-primary-foreground hover:bg-clay/90">
                Clay
              </Button>
              <Button className="bg-sand text-foreground hover:bg-sand/90">
                Sand
              </Button>
              <Button className="bg-ochre text-primary-foreground hover:bg-ochre/90">
                Ochre
              </Button>
            </div>
          </div>
        </section>
        
        <Separator />
        {/* Cards Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground font-serif">
            Cards & Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is a card component using the semantic color tokens from
                  the sepia theme.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card className="border-sage-500/30">
              <CardHeader>
                <CardTitle>Featured Project</CardTitle>
                <CardDescription>
                  <Badge className="bg-sage-500 text-white">
                    New
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A beautiful project showcasing the warm tones of the sepia
                  palette with sage green accents.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Design</Badge>
                  <Badge variant="outline">Development</Badge>
                  <Badge className="bg-sage-200 text-sage-800 border-sage-300">
                    Featured
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stats Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                  <p className="text-2xl font-bold text-foreground">12,543</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Engagement Rate
                  </p>
                  <p className="text-2xl font-bold text-foreground">67%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <Separator />
        {/* Custom Color Swatches */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground font-serif">
            Custom Sepia Colors
          </h2>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground font-serif">
              Sepia Scale
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-50 border border-border"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  50
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-100 border border-border"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  100
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-200 border border-border"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  200
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-300 border border-border"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  300
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-400"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  400
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-500"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  500
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-600"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  600
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-700"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  700
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-800"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  800
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-900"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  900
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sepia-950"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  950
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground font-serif">
              Sage Green Scale
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-50 border border-border"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  50
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-100 border border-border"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  100
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-200 border border-border"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  200
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-300 border border-border"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  300
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-400"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  400
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-500"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  500
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-600"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  600
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-700"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  700
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-800"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  800
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-900"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  900
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-16 rounded-md bg-sage-950"></div>
                <p className="text-xs text-center font-mono text-muted-foreground">
                  950
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-foreground font-serif">
              Warm Accent Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-terracotta"></div>
                <p className="text-sm font-mono text-center text-muted-foreground">
                  Terracotta
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-clay"></div>
                <p className="text-sm font-mono text-center text-muted-foreground">
                  Clay
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-sand"></div>
                <p className="text-sm font-mono text-center text-muted-foreground">
                  Sand
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-ochre"></div>
                <p className="text-sm font-mono text-center text-muted-foreground">
                  Ochre
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-sienna"></div>
                <p className="text-sm font-mono text-center text-muted-foreground">
                  Sienna
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-umber"></div>
                <p className="text-sm font-mono text-center text-muted-foreground">
                  Umber
                </p>
              </div>
            </div>
          </div>
        </section>
        <Separator />
        {/* Interactive Demo */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground font-serif">
            Interactive Elements
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Sample Form</CardTitle>
              <CardDescription>Testing input and focus states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none"
                />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button>Submit</Button>
              <Button variant="outline">Cancel</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
